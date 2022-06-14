/**
 * Represents options for a password authentication request
 */
export class PasswordCredentials {
    /** The url used to request a token */
    tokenUrl: string = "";
    /** The optional url used to send a refresh token */
    refreshTokenUrl: string | undefined;
    /** The user name */
    username: string = "";
    /** The password */
    password: string = "";
    /** The grant type, defaults to *password* */
    grantType: string = "password";
    /** The refresh grant type, defaults to *refresh_token* */
    refreshGrantType: string = "refresh_token";
    /** The requested scopes */
    scope: string = "";

    constructor(props?: Partial<PasswordCredentials>) {
        Object.assign(this, props);
    }
}
