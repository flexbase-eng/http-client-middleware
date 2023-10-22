import { compose, rest as mockServer } from 'msw';
import { goodPass, goodRefreshToken, goodToken, goodUser, mockUrl, testTokenType, tokenUrl, tokenUrl2 } from './constants';

interface TokenRequest {
  grant_type: string;
  refresh_token?: string;
  scope: string;

  username?: string;
  password?: string;

  client_id?: string;
  client_secret?: string;
}

const createToken = (request: any, response: any, context: any, token_type: string | null) => {
  console.info(request);

  const contentType: string = request.headers.get('Content-Type');
  const isXURL: boolean = contentType.startsWith('application/x-www-form-urlencoded');

  if (!isXURL) {
    console.error(`content type expected to be application/x-www-form-urlencoded: ${contentType}`);
    return response(context.status(400));
  }

  let body: TokenRequest = <TokenRequest>{};

  request.body.split('&').forEach((x: any) => {
    const [a, b] = x.split('=');
    return Object.assign(body, { [a]: b });
  });

  const { grant_type, scope } = body;

  let valid = false;

  if (grant_type === 'password') {
    const { username, password } = body;
    valid = username === goodUser && password === goodPass;
  } else if (grant_type === 'client_credentials') {
    const { client_id, client_secret } = body;
    valid = client_id === goodUser && client_secret === goodPass;
  } else if (grant_type === 'refresh_token') {
    const { username, client_id, refresh_token } = body;

    valid = username ? username === goodUser : client_id === goodUser;
    valid ||= refresh_token === goodRefreshToken;
  }

  let json: any = null;

  if (valid) {
    json = {
      access_token: goodToken,
      token_type,
      expires_in: 100,
      refresh_token: goodRefreshToken,
      scope,
    };
  }

  const res = compose(context.status(valid ? 200 : 401), context.json(json));

  return response(res);
};

export const handlers = [
  mockServer.post<string>(tokenUrl, (request, response, context) => createToken(request, response, context, 'Bearer')),
  mockServer.post<string>(tokenUrl2, (request, response, context) => createToken(request, response, context, null)),

  mockServer.get(mockUrl + '/test', (request, response, context) => {
    const authHeader = request.headers.get('authorization');

    if (authHeader === testTokenType + ' ' + goodToken) {
      return response(compose(context.status(200), context.json({ success: true }), context.set('access-control-allow-origin', '*')));
    }

    return response(compose(context.status(401), context.set('access-control-allow-origin', '*')));
  }),

  mockServer.get(mockUrl + '/anontest', (_, response, context) => {
    const res = compose(context.status(200), context.json({ success: true }), context.set('access-control-allow-origin', '*'));

    return response(res);
  }),
];
