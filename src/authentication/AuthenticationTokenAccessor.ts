import { AuthenticationToken } from './AuthenticationToken';

/**
 * Represents a type used to request authentication tokens
 * @typeparam Credentials The type of credentials to be used
 */
export interface AuthenticationTokenAccessor<Credentials> {
    /**
     * Checks if the given token is valid
     * @param token The token to be verified
     * @returns a promise resolved `true` if valid, `false` otherwise
     * */
    validateToken(token: AuthenticationToken | null): Promise<boolean>;
    /**
     * Requests an authentication token
     * @param credentials The credentials used to request a token
     * @param refreshToken An optional refresh token
     * @returns a promise resolved with an authentication token if successful; null if failure
     */
    requestToken(credentials: Credentials, refreshToken: string | undefined): Promise<AuthenticationToken | null>;
}
