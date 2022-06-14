# http-client-middleware

This is a middleware package to ease http authentication

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=flexbase-eng_http-client-middleware&metric=coverage)](https://sonarcloud.io/summary/new_code?id=flexbase-eng_http-client-middleware) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=flexbase-eng_http-client-middleware&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=flexbase-eng_http-client-middleware)

## Usage

Using [wretch](https://github.com/elbywan/wretch)

```typescript
// for password creds we only need to supply the urls as user/pass will come from a login form
const passwordCredentials = {
  tokenUrl: "https://some.url/auth/token",
  refreshTokenUrl: "https://some.url/auth/refresh",
};

class SimpleAuthenticationTokenStore implements AuthenticationTokenStore {
    private _authenticationToken: AuthenticationToken | null = null;

    retrieveToken(): IAuthenticationToken | null {
        return this._authenticationToken;
    }

    storeToken(token: IAuthenticationToken | null): void {
        this._authenticationToken = token;
    }
}

const authMiddleware = authenticationTokenMiddleware({
    credentialProvider: () => passwordCredentials,
    tokenAccessor: new PasswordAuthenticationTokenAccessor(),
    tokenStore: new SimpleAuthenticationTokenStore()
});

wretch(...).middlewares([authMiddleware]);
```