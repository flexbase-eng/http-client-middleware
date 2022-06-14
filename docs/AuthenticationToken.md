# Interface: AuthenticationToken

Represents an authentication token

## Table of contents

### Properties

- [expiration](../wiki/AuthenticationToken#expiration)
- [refreshToken](../wiki/AuthenticationToken#refreshtoken)
- [scope](../wiki/AuthenticationToken#scope)
- [token](../wiki/AuthenticationToken#token)
- [tokenType](../wiki/AuthenticationToken#tokentype)

## Properties

### expiration

• **expiration**: `number`

The expiration of a token in seconds since epoch

#### Defined in

[authentication/AuthenticationToken.ts:10](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationToken.ts#L10)

___

### refreshToken

• `Optional` **refreshToken**: `string`

An optional refresh token value

#### Defined in

[authentication/AuthenticationToken.ts:12](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationToken.ts#L12)

___

### scope

• **scope**: `string`

The space delimited scopes associated with the token

#### Defined in

[authentication/AuthenticationToken.ts:14](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationToken.ts#L14)

___

### token

• **token**: `string`

The token value

#### Defined in

[authentication/AuthenticationToken.ts:8](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationToken.ts#L8)

___

### tokenType

• **tokenType**: `string`

The type of the token

#### Defined in

[authentication/AuthenticationToken.ts:6](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationToken.ts#L6)
