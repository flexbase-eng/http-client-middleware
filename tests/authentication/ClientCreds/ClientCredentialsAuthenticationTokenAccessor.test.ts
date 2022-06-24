import { DateTime } from 'luxon';
import { ClientCredentialsAuthenticationTokenAccessor, ClientCredentials } from '../../../src/index';
import { badPass, badUser, goodPass, goodRefreshToken, goodToken, goodUser, tokenUrl, tokenUrl2 } from '../../mocks/server/constants';

test("ClientCredentialsAuthenticationTokenAccessor Success", async () => {

    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();
    const response = await tokenAccessor.requestToken(new ClientCredentials({
        tokenUrl,
        clientId: goodUser,
        clientSecret: goodPass,
        scope: "scope"
    }), undefined);

    expect(response).not.toBeNull();

    const token = response!;

    expect(token.tokenType).toBe("Bearer");
    expect(token.token).toBe(goodToken);
    expect(token.expiration).toBe(100);
    expect(token.refreshToken).toBe(goodRefreshToken);
    expect(token.scope).toBe("scope");
});

test("ClientCredentialsAuthenticationTokenAccessor Success but returns no tokenType nor scope", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();
    const response = await tokenAccessor.requestToken(new ClientCredentials({
        tokenUrl: tokenUrl2,
        clientId: goodUser,
        clientSecret: goodPass
    }), undefined);

    expect(response).not.toBeNull();

    const token = response!;

    expect(token.tokenType).toBe("Bearer");
    expect(token.token).toBe(goodToken);
    expect(token.expiration).toBe(100);
    expect(token.refreshToken).toBe(goodRefreshToken);
    expect(token.scope).toBe("");
});

test("ClientCredentialsAuthenticationTokenAccessor bad user/pass", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();
    const response = await tokenAccessor.requestToken(new ClientCredentials({
        tokenUrl,
        clientId: badUser,
        clientSecret: badPass
    }), undefined);

    const token = response;

    expect(token).toBeNull();
});

test("ClientCredentialsAuthenticationTokenAccessor not expired token", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();

    const isValid = await tokenAccessor.validateToken({
        token: "",
        tokenType: "",
        expiration: DateTime.utc().plus({ minutes: 5 }).toSeconds(),
        scope: "",
    });

    expect(isValid).toBe(true);
});

test("ClientCredentialsAuthenticationTokenAccessor expired token", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();

    const isValid = await tokenAccessor.validateToken({
        token: "",
        tokenType: "",
        expiration: DateTime.utc().toSeconds(),
        scope: "",
    });

    expect(isValid).toBe(false);
});

test("ClientCredentialsAuthenticationTokenAccessor no token fails", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();

    const isValid = await tokenAccessor.validateToken(null);

    expect(isValid).toBe(false);
});

test("ClientCredentialsAuthenticationTokenAccessor refresh token success", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();

    const response = await tokenAccessor.requestToken(new ClientCredentials({
        refreshTokenUrl: tokenUrl,
        clientId: goodUser,
        scope: "scope"
    }), goodRefreshToken);

    expect(response).not.toBeNull();

    const token = response!;

    expect(token.tokenType).toBe("Bearer");
    expect(token.token).toBe(goodToken);
    expect(token.expiration).toBe(100);
    expect(token.refreshToken).toBe(goodRefreshToken);
    expect(token.scope).toBe("scope");
});

test("ClientCredentialsAuthenticationTokenAccessor refresh token success but no refreshTokenUrl", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();

    const response = await tokenAccessor.requestToken(new ClientCredentials({
        tokenUrl,
        clientId: goodUser,
        scope: "scope"
    }), goodRefreshToken);

    expect(response).not.toBeNull();

    const token = response!;

    expect(token.tokenType).toBe("Bearer");
    expect(token.token).toBe(goodToken);
    expect(token.expiration).toBe(100);
    expect(token.refreshToken).toBe(goodRefreshToken);
    expect(token.scope).toBe("scope");
});

test("ClientCredentialsAuthenticationTokenAccessor request token exception", async () => {
    const tokenAccessor = new ClientCredentialsAuthenticationTokenAccessor();

    await expect(tokenAccessor.requestToken(new ClientCredentials({
        tokenUrl: "",
        clientId: badUser,
        clientSecret: badPass
    }), undefined))
        .rejects
        .toThrow()
        ;
});