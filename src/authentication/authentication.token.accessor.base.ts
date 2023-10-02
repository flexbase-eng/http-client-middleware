import { DateTime } from 'luxon';
import { AuthenticationToken } from './authentication.token.js';
import { AuthenticationTokenAccessor } from './authentication.token.accessor.js';

/** @ignore */
export abstract class AuthenticationTokenAccessorBase<Credentials> implements AuthenticationTokenAccessor<Credentials> {
  validateToken(token: AuthenticationToken | null): Promise<boolean> {
    if (!token) {
      return Promise.resolve(false);
    }

    const exp = DateTime.fromSeconds(token.expiration);

    return Promise.resolve(exp > DateTime.utc());
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected abstract generateBody(credentials: Credentials, refreshToken: string | undefined): { url: string; body: Record<string, any> };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected coerceResponse(tokenResponse: any): AuthenticationToken | null {
    return {
      token: tokenResponse.access_token,
      tokenType: tokenResponse.token_type || 'Bearer',
      expiration: tokenResponse.expires_in,
      refreshToken: tokenResponse.refresh_token,
      scope: tokenResponse.scope || '',
    };
  }

  async requestToken(credentials: Credentials, refreshToken: string | undefined): Promise<AuthenticationToken | null> {
    const { url, body } = this.generateBody(credentials, refreshToken);

    const formBody = Object.keys(body)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(body[key]))
      .join('&');

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    });

    if (response.status < 200 || response.status > 299) {
      return null;
    }

    const tokenResponse = await response.json();

    return this.coerceResponse(tokenResponse);
  }
}
