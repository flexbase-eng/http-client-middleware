import { test, expect } from 'vitest';
import { createEmptyAuthenticationToken } from '../../src/authentication/authentication.token';

test('AuthenticationToken Create empty object', () => {
  const token = createEmptyAuthenticationToken();

  expect(token).not.toBeNull();
});
