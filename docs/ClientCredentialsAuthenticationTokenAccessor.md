# Class: ClientCredentialsAuthenticationTokenAccessor

Represents a type used to perform client credential authentication requests

## Hierarchy

- `AuthenticationTokenAccessorBase`<[`ClientCredentials`](../wiki/ClientCredentials)\>

  ↳ **`ClientCredentialsAuthenticationTokenAccessor`**

## Table of contents

### Constructors

- [constructor](../wiki/ClientCredentialsAuthenticationTokenAccessor#constructor)

### Methods

- [generateBody](../wiki/ClientCredentialsAuthenticationTokenAccessor#generatebody)
- [requestToken](../wiki/ClientCredentialsAuthenticationTokenAccessor#requesttoken)
- [validateToken](../wiki/ClientCredentialsAuthenticationTokenAccessor#validatetoken)

## Constructors

### constructor

• **new ClientCredentialsAuthenticationTokenAccessor**()

#### Inherited from

AuthenticationTokenAccessorBase<ClientCredentials\>.constructor

## Methods

### generateBody

▸ `Protected` **generateBody**(`credentials`, `refreshToken`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`ClientCredentials`](../wiki/ClientCredentials) |
| `refreshToken` | `undefined` \| `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `body` | `any` |
| `url` | `string` |

#### Overrides

AuthenticationTokenAccessorBase.generateBody

#### Defined in

authentication/ClientCreds/ClientCredentialsAuthenticationTokenAccessor.ts:7

___

### requestToken

▸ **requestToken**(`credentials`, `refreshToken`): `Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`ClientCredentials`](../wiki/ClientCredentials) |
| `refreshToken` | `undefined` \| `string` |

#### Returns

`Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

#### Inherited from

AuthenticationTokenAccessorBase.requestToken

#### Defined in

authentication/AuthenticationTokenAccessorBase.ts:22

___

### validateToken

▸ **validateToken**(`token`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | ``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

AuthenticationTokenAccessorBase.validateToken

#### Defined in

authentication/AuthenticationTokenAccessorBase.ts:10
