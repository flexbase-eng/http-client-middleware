# Interface: AuthenticationTokenMiddlewareOptions<Credentials\>

Represents options used by [AuthenticationTokenMiddleware](../wiki/Exports#authenticationtokenmiddleware)

## Type parameters

| Name |
| :------ |
| `Credentials` |

## Table of contents

### Properties

- [tokenAccessor](../wiki/AuthenticationTokenMiddlewareOptions#tokenaccessor)
- [tokenStore](../wiki/AuthenticationTokenMiddlewareOptions#tokenstore)

### Methods

- [credentialProvider](../wiki/AuthenticationTokenMiddlewareOptions#credentialprovider)

## Properties

### tokenAccessor

• **tokenAccessor**: [`AuthenticationTokenAccessor`](../wiki/AuthenticationTokenAccessor)<`Credentials`\>

The token accessor to be used by the middleware

#### Defined in

[authentication/AuthenticationTokenMiddlewareOptions.ts:13](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenMiddlewareOptions.ts#L13)

___

### tokenStore

• **tokenStore**: [`AuthenticationTokenStore`](../wiki/AuthenticationTokenStore)

The authentication token store to be used by the middleware

#### Defined in

[authentication/AuthenticationTokenMiddlewareOptions.ts:15](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenMiddlewareOptions.ts#L15)

## Methods

### credentialProvider

▸ **credentialProvider**(): `Credentials`

A function to provide credentials to the middleware

#### Returns

`Credentials`

#### Defined in

[authentication/AuthenticationTokenMiddlewareOptions.ts:11](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenMiddlewareOptions.ts#L11)
