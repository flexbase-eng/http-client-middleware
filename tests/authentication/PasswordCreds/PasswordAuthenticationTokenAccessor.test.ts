import { test, expect } from 'vitest';
import { DateTime } from 'luxon';
import { PasswordAuthenticationTokenAccessor, PasswordCredentials } from '../../../src/index';
import { badPass, badUser, goodPass, goodRefreshToken, goodToken, goodUser, tokenUrl, tokenUrl2 } from '../../mocks/server/constants';

test('PasswordAuthenticationTokenAccessor Success', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();
  const response = await tokenAccessor.requestToken(
    new PasswordCredentials({
      tokenUrl,
      username: goodUser,
      password: goodPass,
      scope: 'scope',
    }),
    undefined
  );

  expect(response).not.toBeNull();

  const token = response!;

  expect(token.tokenType).toBe('Bearer');
  expect(token.token).toBe(goodToken);
  expect(token.expiration).toBe(100);
  expect(token.refreshToken).toBe(goodRefreshToken);
  expect(token.scope).toBe('scope');
});

test('PasswordAuthenticationTokenAccessor Success but returns no tokenType nor scope', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();
  const response = await tokenAccessor.requestToken(
    new PasswordCredentials({
      tokenUrl: tokenUrl2,
      username: goodUser,
      password: goodPass,
    }),
    undefined
  );

  expect(response).not.toBeNull();

  const token = response!;

  expect(token.tokenType).toBe('Bearer');
  expect(token.token).toBe(goodToken);
  expect(token.expiration).toBe(100);
  expect(token.refreshToken).toBe(goodRefreshToken);
  expect(token.scope).toBe('');
});

test('PasswordAuthenticationTokenAccessor bad user/pass', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();
  const response = await tokenAccessor.requestToken(
    new PasswordCredentials({
      tokenUrl,
      username: badUser,
      password: badPass,
    }),
    undefined
  );

  const token = response;

  expect(token).toBeNull();
});

test('PasswordAuthenticationTokenAccessor not expired token', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();

  const isValid = await tokenAccessor.validateToken({
    token: '',
    tokenType: '',
    expiration: DateTime.utc().plus({ minutes: 5 }).toSeconds(),
    scope: '',
  });

  expect(isValid).toBe(true);
});

test('PasswordAuthenticationTokenAccessor expired token', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();

  const isValid = await tokenAccessor.validateToken({
    token: '',
    tokenType: '',
    expiration: DateTime.utc().toSeconds(),
    scope: '',
  });

  expect(isValid).toBe(false);
});

test('PasswordAuthenticationTokenAccessor no token fails', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();

  const isValid = await tokenAccessor.validateToken(null);

  expect(isValid).toBe(false);
});

test('PasswordAuthenticationTokenAccessor refresh token success', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();

  const response = await tokenAccessor.requestToken(
    new PasswordCredentials({
      refreshTokenUrl: tokenUrl,
      username: goodUser,
      scope: 'scope',
    }),
    goodRefreshToken
  );

  expect(response).not.toBeNull();

  const token = response!;

  expect(token.tokenType).toBe('Bearer');
  expect(token.token).toBe(goodToken);
  expect(token.expiration).toBe(100);
  expect(token.refreshToken).toBe(goodRefreshToken);
  expect(token.scope).toBe('scope');
});

test('PasswordAuthenticationTokenAccessor refresh token success but no refreshTokenUrl', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();

  const response = await tokenAccessor.requestToken(
    new PasswordCredentials({
      tokenUrl,
      username: goodUser,
      scope: 'scope',
    }),
    goodRefreshToken
  );

  expect(response).not.toBeNull();

  const token = response!;

  expect(token.tokenType).toBe('Bearer');
  expect(token.token).toBe(goodToken);
  expect(token.expiration).toBe(100);
  expect(token.refreshToken).toBe(goodRefreshToken);
  expect(token.scope).toBe('scope');
});

test('PasswordAuthenticationTokenAccessor request token exception', async () => {
  const tokenAccessor = new PasswordAuthenticationTokenAccessor();

  await expect(
    tokenAccessor.requestToken(
      new PasswordCredentials({
        tokenUrl: '',
        username: badUser,
        password: badPass,
      }),
      undefined
    )
  ).rejects.toThrow();
});
