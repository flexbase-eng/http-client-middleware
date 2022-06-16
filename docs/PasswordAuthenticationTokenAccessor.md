# Class: PasswordAuthenticationTokenAccessor

Represents a type used to perform password authentication requests

## Hierarchy

- `AuthenticationTokenAccessorBase`<[`PasswordCredentials`](../wiki/PasswordCredentials)\>

  ↳ **`PasswordAuthenticationTokenAccessor`**

## Table of contents

### Constructors

- [constructor](../wiki/PasswordAuthenticationTokenAccessor#constructor)

### Methods

- [generateBody](../wiki/PasswordAuthenticationTokenAccessor#generatebody)
- [requestToken](../wiki/PasswordAuthenticationTokenAccessor#requesttoken)
- [validateToken](../wiki/PasswordAuthenticationTokenAccessor#validatetoken)

## Constructors

### constructor

• **new PasswordAuthenticationTokenAccessor**()

#### Inherited from

AuthenticationTokenAccessorBase<PasswordCredentials\>.constructor

## Methods

### generateBody

▸ `Protected` **generateBody**(`credentials`, `refreshToken`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`PasswordCredentials`](../wiki/PasswordCredentials) |
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

[authentication/PasswordCreds/PasswordAuthenticationTokenAccessor.ts:7](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/PasswordCreds/PasswordAuthenticationTokenAccessor.ts#L7)

___

### requestToken

▸ **requestToken**(`credentials`, `refreshToken`): `Promise`<``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`PasswordCredentials`](../wiki/PasswordCredentials) |
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
