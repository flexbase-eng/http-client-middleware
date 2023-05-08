import { AuthenticationTokenAccessorBase } from '../authentication.token.accessor.base.js';
import { PasswordCredentials } from './password.credentials.js';

/** Represents a type used to perform password authentication requests */
export class PasswordAuthenticationTokenAccessor extends AuthenticationTokenAccessorBase<PasswordCredentials> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected generateBody(credentials: PasswordCredentials, refreshToken: string | undefined): { url: string; body: any } {
    let url = '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const body: any = {};

    if (refreshToken && refreshToken.trim().length !== 0) {
      body.grant_type = credentials.refreshGrantType;
      body.refresh_token = refreshToken;
      url = credentials.refreshTokenUrl || credentials.tokenUrl;
    } else {
      body.grant_type = credentials.grantType;
      body.password = credentials.password;
      url = credentials.tokenUrl;
    }

    body.username = credentials.username;
    body.scope = credentials.scope;

    return { url, body };
  }
}
