import { DateTime } from 'luxon';
import fetch from 'node-fetch';
import { AuthenticationToken } from '../AuthenticationToken';
import { AuthenticationTokenAccessor } from '../AuthenticationTokenAccessor';
import { TokenResponse } from '../TokenResponse';
import { PasswordCredentials } from './PasswordCredentials';

/** Represents a type used to perform password authentication requests */
export class PasswordAuthenticationTokenAccessor implements AuthenticationTokenAccessor<PasswordCredentials> {
    validateToken(token: AuthenticationToken | null): Promise<boolean> {
        if (!token) {
            return Promise.resolve(false);
        }

        const exp = DateTime.fromSeconds(token.expiration);

        return Promise.resolve(exp > DateTime.utc());
    }

    async requestToken(credentials: PasswordCredentials, refreshToken: string | undefined): Promise<AuthenticationToken | null> {
        let url = '';
        const formData: any = {};

        if (refreshToken && refreshToken.trim().length !== 0) {
            formData.grant_type = credentials.refreshGrantType;
            formData.refresh_token = refreshToken;
            url = credentials.refreshTokenUrl || credentials.tokenUrl;
        } else {
            formData.grant_type = credentials.grantType;
            formData.password = credentials.password;
            url = credentials.tokenUrl;
        }

        formData.username = credentials.username;
        formData.scope = credentials.scope;

        const formBody = Object.keys(formData)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
            .join('&');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: formBody,
        });

        if (!response.ok) {
            // console.warn("Unable to request password access token: " + response.status);
            return null;
        }

        const tokenResponse: TokenResponse = await response.json();

        return {
            token: tokenResponse.access_token,
            tokenType: tokenResponse.token_type || 'Bearer',
            expiration: tokenResponse.expires_in,
            refreshToken: tokenResponse.refresh_token,
            scope: tokenResponse.scope || '',
        };
    }
}
