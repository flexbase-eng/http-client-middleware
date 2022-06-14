# Interface: TokenResponse

Represents a response from an authorization server

Example of a token response:
```
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store

{
"access_token":"MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
"token_type":"Bearer",
"expires_in":3600,
"refresh_token":"IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
"scope":"create"
}
```

## Table of contents

### Properties

- [access\_token](../wiki/TokenResponse#access_token)
- [expires\_in](../wiki/TokenResponse#expires_in)
- [refresh\_token](../wiki/TokenResponse#refresh_token)
- [scope](../wiki/TokenResponse#scope)
- [token\_type](../wiki/TokenResponse#token_type)

## Properties

### access\_token

• **access\_token**: `string`

The access token string as issued by the authorization server

#### Defined in

authentication/TokenResponse.ts:22

___

### expires\_in

• **expires\_in**: `number`

If the access token expires, the server should reply with the duration of time the access token is granted for

#### Defined in

authentication/TokenResponse.ts:26

___

### refresh\_token

• `Optional` **refresh\_token**: `string`

If the access token will expire, then it is useful to return a refresh token which applications can use to obtain another access token. However, tokens issued with the implicit grant cannot be issued a refresh token

#### Defined in

authentication/TokenResponse.ts:28

___

### scope

• `Optional` **scope**: `string`

If the scope the user granted is identical to the scope the app requested, this parameter is optional. If the granted scope is different from the requested scope, such as if the user modified the scope, then this parameter is required

#### Defined in

authentication/TokenResponse.ts:30

___

### token\_type

• `Optional` **token\_type**: `string`

The type of token this is, typically just the string *Bearer*

#### Defined in

authentication/TokenResponse.ts:24
