import { AuthenticationToken, AuthenticationTokenStore } from '../../src';

export class TestAuthenticationTokenStore implements AuthenticationTokenStore {
    private _token: AuthenticationToken | null;

    retrieveToken(): AuthenticationToken | null {
        return this._token;
    }
    storeToken(token: AuthenticationToken): void {
        this._token = token;
    }
}
