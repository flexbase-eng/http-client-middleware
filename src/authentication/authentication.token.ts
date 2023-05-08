/**
 * Represents an authentication token
 */
export interface AuthenticationToken {
  /** The type of the token */
  tokenType: string;
  /** The token value */
  token: string;
  /** The expiration of a token in seconds since epoch */
  expiration: number;
  /** An optional refresh token value */
  refreshToken?: string;
  /** The space delimited scopes associated with the token */
  scope: string;
}

/** Creates an empty {@link AuthenticationToken} */
export const createEmptyAuthenticationToken = (): AuthenticationToken => {
  return {
    tokenType: '',
    token: '',
    expiration: 0,
    refreshToken: '',
    scope: '',
  };
};
