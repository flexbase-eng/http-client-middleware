import { AuthenticationTokenAccessorBase } from '../authentication.token.accessor.base.js';
import { ClientCredentials } from './client.credentials.js';

/** Represents a type used to perform client credential authentication requests */
export class ClientCredentialsAuthenticationTokenAccessor extends AuthenticationTokenAccessorBase<ClientCredentials> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected generateBody(credentials: ClientCredentials, refreshToken: string | undefined): { url: string; body: any } {
    let url = '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
