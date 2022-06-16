# Class: ClientCredentials

Represents options for a client credential authentication request

## Table of contents

### Constructors

- [constructor](../wiki/ClientCredentials#constructor)

### Properties

- [clientId](../wiki/ClientCredentials#clientid)
- [clientSecret](../wiki/ClientCredentials#clientsecret)
- [grantType](../wiki/ClientCredentials#granttype)
- [refreshGrantType](../wiki/ClientCredentials#refreshgranttype)
- [refreshTokenUrl](../wiki/ClientCredentials#refreshtokenurl)
- [scope](../wiki/ClientCredentials#scope)
- [tokenUrl](../wiki/ClientCredentials#tokenurl)

## Constructors

### constructor

• **new ClientCredentials**(`props?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props?` | `Partial`<[`ClientCredentials`](../wiki/ClientCredentials)\> |

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:20

## Properties

### clientId

• **clientId**: `string` = `''`

The client id

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:10

___

### clientSecret

• **clientSecret**: `string` = `''`

The client secret

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:12

___

### grantType

• **grantType**: `string` = `'client_credentials'`

The grant type, defaults to *client_credentials*

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:14

___

### refreshGrantType

• **refreshGrantType**: `string` = `'refresh_token'`

The refresh grant type, defaults to *refresh_token*

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:16

___

### refreshTokenUrl

• **refreshTokenUrl**: `undefined` \| `string`

The optional url used to send a refresh token

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:8

___

### scope

• **scope**: `string` = `''`

The requested scopes

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:18

___

### tokenUrl

• **tokenUrl**: `string` = `''`

The url used to request a token

#### Defined in

authentication/ClientCreds/ClientCredentials.ts:6
