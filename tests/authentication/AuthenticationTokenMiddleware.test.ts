import { authenticationTokenMiddleware, AuthenticationToken, AuthenticationTokenAccessor, AuthenticationTokenStore } from '../../src/index';
import { Mock, It, Times } from "moq.ts";
import { goodRefreshToken, goodToken, mockUrl, oldToken, testTokenType } from '../mocks/server/constants';
import { TestAuthenticationTokenStore } from '../mocks/TestAuthenticationTokenStore';
import wretch from "wretch";
import { DateTime } from 'luxon';
import fetch from 'node-fetch';

test("AuthenticationTokenMiddleware Success", async () => {

    const tokenStore = new Mock<AuthenticationTokenStore>()
        .setup(m => m.retrieveToken()).returns(null)
        .setup(m => m.storeToken(It.IsAny<AuthenticationToken | null>())).returns()
        ;

    const tokenAccessor = new Mock<AuthenticationTokenAccessor<any>>()
        .setup(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>())).returnsAsync({
            token: goodToken,
            tokenType: testTokenType,
            expiration: 100,
            refreshToken: goodRefreshToken,
            scope: ""
        })
        .setup(m => m.validateToken(It.IsAny<AuthenticationToken | null>())).returnsAsync(false)
        ;

    const middleware = authenticationTokenMiddleware({
        credentialProvider: () => { },
        tokenStore: tokenStore.object(),
        tokenAccessor: tokenAccessor.object()
    });

    const client = wretch(mockUrl)
        .polyfills({ fetch })
        .accept("application/json")
        .middlewares([middleware])
        ;

    const response = await client.url("/test").get().json<{ success: boolean }>();

    expect(response).not.toBeNull();
    expect(response.success).toBe(true);

    tokenAccessor.verify(m => m.requestToken, Times.Once());
});

test("AuthenticationTokenMiddleware Anonymous route", async () => {

    const tokenStore = new Mock<AuthenticationTokenStore>();

    const tokenAccessor = new Mock<AuthenticationTokenAccessor<any>>();

    const middleware = authenticationTokenMiddleware({
        credentialProvider: () => { },
        tokenStore: tokenStore.object(),
        tokenAccessor: tokenAccessor.object()
    });

    const client = wretch(mockUrl)
        .polyfills({ fetch })
        .accept("application/json")
        .middlewares([middleware])
        ;

    const response = await client.url("/anontest")
        .options({ authContext: { isAnonymousRoute: true } }, true)
        .get().json<{ success: boolean }>();

    expect(response).not.toBeNull();
    expect(response.success).toBe(true);

    tokenStore.verify(m => m.retrieveToken, Times.Never());
    tokenAccessor.verify(m => m.validateToken, Times.Never());
    tokenAccessor.verify(m => m.requestToken, Times.Never());
});

test("AuthenticationTokenMiddleware 401 then 200", async () => {

    const tokenStore = new TestAuthenticationTokenStore();

    tokenStore.storeToken({
        tokenType: testTokenType,
        token: oldToken,
        expiration: DateTime.utc().plus({ minutes: 1 }).toUnixInteger(),
        scope: ""
    });

    const tokenAccessor = new Mock<AuthenticationTokenAccessor<any>>()
        .setup(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>())).returnsAsync({
            token: goodToken,
            tokenType: testTokenType,
            expiration: DateTime.utc().plus({ minutes: 1 }).toUnixInteger(),
            scope: ""
        })
        .setup(m => m.validateToken(It.Is<AuthenticationToken>(token => token.token === oldToken))).returnsAsync(false)
        .setup(m => m.validateToken(It.Is<AuthenticationToken>(token => token.token === goodToken))).returnsAsync(true)
        ;

    const middleware = authenticationTokenMiddleware({
        credentialProvider: () => { },
        tokenStore: tokenStore,
        tokenAccessor: tokenAccessor.object()
    });

    const client = wretch(mockUrl)
        .polyfills({ fetch })
        .accept("application/json")
        .middlewares([middleware])
        ;

    const response = await client.url("/test").get().json<{ success: boolean }>();

    expect(response).not.toBeNull();
    expect(response.success).toBe(true);

    tokenAccessor.verify(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>()), Times.Once());
    tokenAccessor.verify(m => m.validateToken(It.Is<AuthenticationToken>(token => token.token === oldToken)), Times.Once());
});

test("AuthenticationTokenMiddleware fails", async () => {

    const tokenStore = new Mock<AuthenticationTokenStore>()
        .setup(m => m.retrieveToken()).returns(null)
        .setup(m => m.storeToken(It.IsAny<AuthenticationToken | null>())).returns()
        ;

    const tokenAccessor = new Mock<AuthenticationTokenAccessor<any>>()
        .setup(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>())).returnsAsync(null)
        .setup(m => m.validateToken(It.IsAny<AuthenticationToken>())).returnsAsync(false)
        ;

    const middleware = authenticationTokenMiddleware({
        credentialProvider: () => { },
        tokenStore: tokenStore.object(),
        tokenAccessor: tokenAccessor.object()
    });

    const client = wretch(mockUrl)
        .polyfills({ fetch })
        .accept("application/json")
        .middlewares([middleware])
        ;

    await expect(client.url("/test").get().json<{ success: boolean }>()).rejects.toThrow();

    tokenAccessor.verify(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>()), Times.Exactly(2));
});

test("AuthenticationTokenMiddleware refresh token", async () => {

    const tokenStore = new TestAuthenticationTokenStore();

    tokenStore.storeToken({
        tokenType: testTokenType,
        token: goodToken,
        expiration: 0,
        refreshToken: goodRefreshToken,
        scope: ""
    });

    const tokenAccessor = new Mock<AuthenticationTokenAccessor<any>>()
        .setup(m => m.requestToken(It.IsAny<any>(), It.Is<string | undefined>(s => s === goodRefreshToken))).returnsAsync({
            token: goodToken,
            tokenType: testTokenType,
            expiration: 100,
            refreshToken: goodRefreshToken,
            scope: ""
        })
        .setup(m => m.validateToken(It.IsAny<AuthenticationToken>())).returnsAsync(false)
        ;

    const middleware = authenticationTokenMiddleware({
        credentialProvider: () => { },
        tokenStore,
        tokenAccessor: tokenAccessor.object()
    });

    const client = wretch(mockUrl)
        .polyfills({ fetch })
        .accept("application/json")
        .middlewares([middleware])
        ;

    const response = await client.url("/test").get().json<{ success: boolean }>();

    expect(response).not.toBeNull();
    expect(response.success).toBe(true);

    tokenAccessor.verify(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>()), Times.Once());
});

test("AuthenticationTokenMiddleware existing valid token", async () => {

    const tokenStore = new TestAuthenticationTokenStore();

    tokenStore.storeToken({
        tokenType: testTokenType,
        token: goodToken,
        expiration: 0,
        refreshToken: goodRefreshToken,
        scope: ""
    });

    const tokenAccessor = new Mock<AuthenticationTokenAccessor<any>>()
        .setup(m => m.validateToken(It.IsAny<AuthenticationToken>())).returnsAsync(true)
        ;

    const middleware = authenticationTokenMiddleware({
        credentialProvider: () => { },
        tokenStore,
        tokenAccessor: tokenAccessor.object()
    });

    const client = wretch(mockUrl)
        .polyfills({ fetch })
        .accept("application/json")
        .middlewares([middleware])
        ;

    const response = await client.url("/test").get().json<{ success: boolean }>();

    expect(response).not.toBeNull();
    expect(response.success).toBe(true);

    tokenAccessor.verify(m => m.requestToken(It.IsAny<any>(), It.IsAny<string | undefined>()), Times.Never());
});