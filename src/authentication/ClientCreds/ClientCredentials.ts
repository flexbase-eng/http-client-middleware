/**
 * Represents options for a client credential authentication request
 */
export class ClientCredentials {
    /** The url used to request a token */
    tokenUrl: string = '';
    /** The optional url used to send a refresh token */
    refreshTokenUrl: string | undefined;
    /** The client id */
    clientId: string = '';
    /** The client secret */
    clientSecret: string = '';
    /** The grant type, defaults to *client_credentials* */
    grantType: string = 'client_credentials';
    /** The refresh grant type, defaults to *refresh_token* */
    refreshGrantType: string = 'refresh_token';
    /** The requested scopes */
    scope: string = '';

    constructor(props?: Partial<ClientCredentials>) {
        Object.assign(this, props);
    }
}
