# http-client-middleware

## Table of contents

### Classes

- [ClientCredentials](../wiki/ClientCredentials)
- [ClientCredentialsAuthenticationTokenAccessor](../wiki/ClientCredentialsAuthenticationTokenAccessor)
- [PasswordAuthenticationTokenAccessor](../wiki/PasswordAuthenticationTokenAccessor)
- [PasswordCredentials](../wiki/PasswordCredentials)

### Interfaces

- [AuthenticationToken](../wiki/AuthenticationToken)
- [AuthenticationTokenAccessor](../wiki/AuthenticationTokenAccessor)
- [AuthenticationTokenMiddlewareOptions](../wiki/AuthenticationTokenMiddlewareOptions)
- [AuthenticationTokenStore](../wiki/AuthenticationTokenStore)
- [TokenResponse](../wiki/TokenResponse)

### Type Aliases

- [AuthenticationTokenMiddleware](../wiki/Exports#authenticationtokenmiddleware)
- [HttpClientMiddleware](../wiki/Exports#httpclientmiddleware)
- [HttpClientMiddlewareHandler](../wiki/Exports#httpclientmiddlewarehandler)
- [MiddlewareContext](../wiki/Exports#middlewarecontext)

### Functions

- [default](../wiki/Exports#default)

## Type Aliases

### AuthenticationTokenMiddleware

Ƭ **AuthenticationTokenMiddleware**: (`options`: [`AuthenticationTokenMiddlewareOptions`](../wiki/AuthenticationTokenMiddlewareOptions)<`any`\>) => [`HttpClientMiddleware`](../wiki/Exports#httpclientmiddleware)

#### Type declaration

▸ (`options`): [`HttpClientMiddleware`](../wiki/Exports#httpclientmiddleware)

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AuthenticationTokenMiddlewareOptions`](../wiki/AuthenticationTokenMiddlewareOptions)<`any`\> |

##### Returns

[`HttpClientMiddleware`](../wiki/Exports#httpclientmiddleware)

#### Defined in

[authentication/AuthenticationTokenMiddleware.ts:5](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenMiddleware.ts#L5)

___

### HttpClientMiddleware

Ƭ **HttpClientMiddleware**: (`next`: [`HttpClientMiddlewareHandler`](../wiki/Exports#httpclientmiddlewarehandler)) => [`HttpClientMiddlewareHandler`](../wiki/Exports#httpclientmiddlewarehandler)

#### Type declaration

▸ (`next`): [`HttpClientMiddlewareHandler`](../wiki/Exports#httpclientmiddlewarehandler)

##### Parameters

| Name | Type |
| :------ | :------ |
| `next` | [`HttpClientMiddlewareHandler`](../wiki/Exports#httpclientmiddlewarehandler) |

##### Returns

[`HttpClientMiddlewareHandler`](../wiki/Exports#httpclientmiddlewarehandler)

#### Defined in

[Middleware.ts:7](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/Middleware.ts#L7)

___

### HttpClientMiddlewareHandler

Ƭ **HttpClientMiddlewareHandler**: (`url`: `string`, `requestContext`: [`MiddlewareContext`](../wiki/Exports#middlewarecontext)) => `Promise`<`Response`\>

#### Type declaration

▸ (`url`, `requestContext`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `requestContext` | [`MiddlewareContext`](../wiki/Exports#middlewarecontext) |

##### Returns

`Promise`<`Response`\>

#### Defined in

[Middleware.ts:5](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/Middleware.ts#L5)

___

### MiddlewareContext

Ƭ **MiddlewareContext**: `RequestInit` & { `[key: string]`: `any`;  }

#### Defined in

[Middleware.ts:1](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/Middleware.ts#L1)

## Functions

### default

▸ **default**(`options`): [`HttpClientMiddleware`](../wiki/Exports#httpclientmiddleware)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AuthenticationTokenMiddlewareOptions`](../wiki/AuthenticationTokenMiddlewareOptions)<`any`\> |

#### Returns

[`HttpClientMiddleware`](../wiki/Exports#httpclientmiddleware)

#### Defined in

[authentication/AuthenticationTokenMiddleware.ts:7](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenMiddleware.ts#L7)
