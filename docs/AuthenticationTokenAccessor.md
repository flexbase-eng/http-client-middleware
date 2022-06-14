# Interface: AuthenticationTokenAccessor<Credentials\>

Represents a type used to request authentication tokens

## Type parameters

| Name | Description |
| :------ | :------ |
| `Credentials` | The type of credentials to be used |

## Implemented by

- [`PasswordAuthenticationTokenAccessor`](../wiki/PasswordAuthenticationTokenAccessor)

## Table of contents

### Methods

- [requestToken](../wiki/AuthenticationTokenAccessor#requesttoken)
- [validateToken](../wiki/AuthenticationTokenAccessor#validatetoken)

## Methods

### requestToken

▸ **requestToken**(`credentials`, `refreshToken`): `Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

Requests an authentication token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `credentials` | `Credentials` | The credentials used to request a token |
| `refreshToken` | `undefined` \| `string` | An optional refresh token |

#### Returns

`Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

a promise resolved with an authentication token if successful; null if failure

#### Defined in

authentication/AuthenticationTokenAccessor.ts:20

___

### validateToken

▸ **validateToken**(`token`): `Promise`<`boolean`\>

Checks if the given token is valid

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | ``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken) | The token to be verified |

#### Returns

`Promise`<`boolean`\>

a promise resolved `true` if valid, `false` otherwise

#### Defined in

authentication/AuthenticationTokenAccessor.ts:13
