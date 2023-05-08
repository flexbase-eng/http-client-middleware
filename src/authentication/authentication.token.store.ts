import { AuthenticationToken } from './authentication.token.js';

/**
 * Represents a type used to manage storage of an authentication token
 */
export interface AuthenticationTokenStore {
  /**
   * Attempts to get the {@link AuthenticationToken}
   * @returns the {@link AuthenticationToken} if stored otherwise `null`
   */
  retrieveToken(): AuthenticationToken | null;
  /**
   * Stores an {@link AuthenticationToken}
   * @param token The token to store or `null` to clear
   */
  storeToken(token: AuthenticationToken | null): void;
}
