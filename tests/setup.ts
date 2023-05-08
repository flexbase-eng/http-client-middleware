import { server } from './mocks/server/server';
import fetch from 'node-fetch';
import { beforeAll, afterEach, afterAll } from 'vitest';
// @ts-ignore
global.fetch = fetch;

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export {};
