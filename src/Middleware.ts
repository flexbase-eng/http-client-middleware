export declare type MiddlewareContext = RequestInit & {
    [key: string]: any;
};

export declare type HttpClientMiddlewareHandler = (url: string, requestContext: MiddlewareContext) => Promise<Response>;

export declare type HttpClientMiddleware = (next: HttpClientMiddlewareHandler) => HttpClientMiddlewareHandler;
