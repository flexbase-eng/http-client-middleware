import { AuthenticationTokenAccessorBase } from '../AuthenticationTokenAccessorBase';
import { ClientCredentials } from './ClientCredentials';

/** Represents a type used to perform client credential authentication requests */
export class ClientCredentialsAuthenticationTokenAccessor extends AuthenticationTokenAccessorBase<ClientCredentials> {
    protected generateBody(credentials: ClientCredentials, refreshToken: string | undefined): { url: string; body: any } {
        let url = '';
        const body: any = {};

        if (refreshToken && refreshToken.trim().length !== 0) {
            body.grant_type = credentials.refreshGrantType;
            body.refresh_token = refreshToken;
            url = credentials.refreshTokenUrl || credentials.tokenUrl;
        } else {
            body.grant_type = credentials.grantType;
            body.client_secret = credentials.clientSecret;
            url = credentials.tokenUrl;
        }

        body.client_id = credentials.clientId;
        body.scope = credentials.scope;

        return { url, body };
    }
}
