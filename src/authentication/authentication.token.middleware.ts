import { HttpClientMiddleware } from '../middleware.js';
import { AuthenticationToken } from './authentication.token.js';
import { AuthenticationTokenMiddlewareOptions } from './authentication.token.middleware.options.js';

export type AuthenticationTokenMiddleware = (options: AuthenticationTokenMiddlewareOptions<unknown>) => HttpClientMiddleware;

export const authenticationTokenMiddleware: AuthenticationTokenMiddleware = options => {
  return next => async (url, requestContext) => {
    let token: AuthenticationToken | null = null;

    let authContext = requestContext.authContext;

    // create auth context if not already provided
    if (!authContext) {
      authContext = requestContext.authContext = {};
    }

    const isAnon = authContext.isAnonymousRoute as boolean | undefined;

    if (isAnon) {
      return next(url, requestContext);
    }

    token = authContext.token;

    if (!token) {
      token = options.tokenStore.retrieveToken();
    }

    const valid = await options.tokenAccessor.validateToken(token);

    const setToken = (token: AuthenticationToken | null) => {
      options.tokenStore.storeToken(token);

      authContext.token = token;

      const tokenString = (token?.tokenType || '') + ' ' + (token?.token || '');

      requestContext = {
        ...requestContext,
        headers: {
          ...(requestContext.headers || {}),
          Authorization: tokenString,
        },
      };
    };

    const requestToken = async () => {
      const creds = options.credentialProvider();
      token = await options.tokenAccessor.requestToken(creds, token?.refreshToken);

      setToken(token);
    };

    if (!valid) {
      await requestToken();
    } else {
      setToken(token);
    }

    let numberOfAttemptsMade = 0;
    const retryUnauthorized = async (response: Response): Promise<Response> => {
      ++numberOfAttemptsMade;

      if (response.status === 401) {
        if (numberOfAttemptsMade <= 1) {
          await requestToken();

          return next(url, requestContext).then(retryUnauthorized);
        } else {
          options.tokenStore.storeToken(null);
        }
      }

      return response;
    };

    return next(url, requestContext).then(retryUnauthorized);
  };
};
