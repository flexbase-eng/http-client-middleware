# Class: PasswordAuthenticationTokenAccessor

Represents a type used to perform password authentication requests

## Implements

- [`AuthenticationTokenAccessor`](../wiki/AuthenticationTokenAccessor)<[`PasswordCredentials`](../wiki/PasswordCredentials)\>

## Table of contents

### Constructors

- [constructor](../wiki/PasswordAuthenticationTokenAccessor#constructor)

### Methods

- [requestToken](../wiki/PasswordAuthenticationTokenAccessor#requesttoken)
- [validateToken](../wiki/PasswordAuthenticationTokenAccessor#validatetoken)

## Constructors

### constructor

• **new PasswordAuthenticationTokenAccessor**()

## Methods

### requestToken

▸ **requestToken**(`credentials`, `refreshToken`): `Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

Requests an authentication token

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`PasswordCredentials`](../wiki/PasswordCredentials) |
| `refreshToken` | `undefined` \| `string` |

#### Returns

`Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

a promise resolved with an authentication token if successful; null if failure

#### Implementation of

[AuthenticationTokenAccessor](../wiki/AuthenticationTokenAccessor).[requestToken](../wiki/AuthenticationTokenAccessor#requesttoken)

#### Defined in

authentication/PasswordCreds/PasswordAuthenticationTokenAccessor.ts:22

___

### validateToken

▸ **validateToken**(`token`): `Promise`<`boolean`\>

Checks if the given token is valid

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | ``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken) |

#### Returns

`Promise`<`boolean`\>

a promise resolved `true` if valid, `false` otherwise

#### Implementation of

[AuthenticationTokenAccessor](../wiki/AuthenticationTokenAccessor).[validateToken](../wiki/AuthenticationTokenAccessor#validatetoken)

#### Defined in

authentication/PasswordCreds/PasswordAuthenticationTokenAccessor.ts:11
