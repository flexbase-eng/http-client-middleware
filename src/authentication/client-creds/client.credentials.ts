/**
 * Represents options for a client credential authentication request
 */
export class ClientCredentials {
  /** The url used to request a token */
  tokenUrl = '';
  /** The optional url used to send a refresh token */
  refreshTokenUrl: string | undefined;
  /** The client id */
  clientId = '';
  /** The client secret */
  clientSecret = '';
  /** The grant type, defaults to *client_credentials* */
  grantType = 'client_credentials';
  /** The refresh grant type, defaults to *refresh_token* */
  refreshGrantType = 'refresh_token';
  /** The requested scopes */
  scope = '';

  constructor(props?: Partial<ClientCredentials>) {
    Object.assign(this, props);
  }
}
