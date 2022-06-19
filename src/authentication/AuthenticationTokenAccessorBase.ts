import { DateTime } from "luxon";
import { AuthenticationToken } from "./AuthenticationToken";
import { AuthenticationTokenAccessor } from "./AuthenticationTokenAccessor";
import { TokenResponse } from "./TokenResponse";
import fetch from 'node-fetch';

/** @ignore */
export abstract class AuthenticationTokenAccessorBase<Credentials> implements AuthenticationTokenAccessor<Credentials> {

    validateToken(token: AuthenticationToken | null): Promise<boolean> {
        if (!token) {
            return Promise.resolve(false);
        }

        const exp = DateTime.fromSeconds(token.expiration);

        return Promise.resolve(exp > DateTime.utc());
    }

    protected abstract generateBody(credentials: Credentials, refreshToken: string | undefined): {url:string, body: any};

    protected coerceResponse(tokenResponse: any): AuthenticationToken | null {
        return {
            token: tokenResponse.access_token,
            tokenType: tokenResponse.token_type || 'Bearer',
            expiration: tokenResponse.expires_in,
            refreshToken: tokenResponse.refresh_token,
            scope: tokenResponse.scope || '',
        };
    }

    async requestToken(credentials: Credentials, refreshToken: string | undefined): Promise<AuthenticationToken | null> {
        
        const {url, body} = this.generateBody(credentials, refreshToken);

        const formBody = Object.keys(body)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
            .join('&');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        });

        if (!response.ok) {
            return null;
        }

        const tokenResponse = await response.json();

        return this.coerceResponse(tokenResponse);
    }
}