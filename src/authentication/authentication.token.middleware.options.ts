import { AuthenticationTokenAccessor } from './authentication.token.accessor.js';
import { AuthenticationTokenStore } from './authentication.token.store.js';

/**
 * Represents options used by {@link AuthenticationTokenMiddleware}
 */
export interface AuthenticationTokenMiddlewareOptions<Credentials> {
  /**
   * A function to provide credentials to the middleware
   */
  credentialProvider: () => Credentials;
  /** The token accessor to be used by the middleware */
  tokenAccessor: AuthenticationTokenAccessor<Credentials>;
  /** The authentication token store to be used by the middleware */
  tokenStore: AuthenticationTokenStore;
}
