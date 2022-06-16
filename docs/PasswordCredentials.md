# Class: PasswordCredentials

Represents options for a password authentication request

## Table of contents

### Constructors

- [constructor](../wiki/PasswordCredentials#constructor)

### Properties

- [grantType](../wiki/PasswordCredentials#granttype)
- [password](../wiki/PasswordCredentials#password)
- [refreshGrantType](../wiki/PasswordCredentials#refreshgranttype)
- [refreshTokenUrl](../wiki/PasswordCredentials#refreshtokenurl)
- [scope](../wiki/PasswordCredentials#scope)
- [tokenUrl](../wiki/PasswordCredentials#tokenurl)
- [username](../wiki/PasswordCredentials#username)

## Constructors

### constructor

• **new PasswordCredentials**(`props?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | `Partial`<[`PasswordCredentials`](../wiki/PasswordCredentials)\> |

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:20](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L20)

## Properties

### grantType

• **grantType**: `string` = `'password'`

The grant type, defaults to *password*

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:14](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L14)

___

### password

• **password**: `string` = `''`

The password

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:12](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L12)

___

### refreshGrantType

• **refreshGrantType**: `string` = `'refresh_token'`

The refresh grant type, defaults to *refresh_token*

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:16](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L16)

___

### refreshTokenUrl

• **refreshTokenUrl**: `undefined` \| `string`

The optional url used to send a refresh token

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:8](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L8)

___

### scope

• **scope**: `string` = `''`

The requested scopes

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:18](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L18)

___

### tokenUrl

• **tokenUrl**: `string` = `''`

The url used to request a token

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:6](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L6)

___

### username

• **username**: `string` = `''`

The user name

#### Defined in

[authentication/PasswordCreds/PasswordCredentials.ts:10](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordCredentials.ts#L10)
