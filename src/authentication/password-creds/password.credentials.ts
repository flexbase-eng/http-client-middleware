/**
 * Represents options for a password authentication request
 */
export class PasswordCredentials {
  /** The url used to request a token */
  tokenUrl = '';
  /** The optional url used to send a refresh token */
  refreshTokenUrl: string | undefined;
  /** The user name */
  username = '';
  /** The password */
  password = '';
  /** The grant type, defaults to *password* */
  grantType = 'password';
  /** The refresh grant type, defaults to *refresh_token* */
  refreshGrantType = 'refresh_token';
  /** The requested scopes */
  scope = '';

  constructor(props?: Partial<PasswordCredentials>) {
    Object.assign(this, props);
  }
}
