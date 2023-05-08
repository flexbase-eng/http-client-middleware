export declare type MiddlewareContext = RequestInit & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export declare type HttpClientMiddlewareHandler = (url: string, requestContext: MiddlewareContext) => Promise<Response>;

export declare type HttpClientMiddleware = (next: HttpClientMiddlewareHandler) => HttpClientMiddlewareHandler;
