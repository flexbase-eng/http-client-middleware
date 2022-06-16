# Interface: AuthenticationTokenStore

Represents a type used to manage storage of an authentication token

## Table of contents

### Methods

- [retrieveToken](../wiki/AuthenticationTokenStore#retrievetoken)
- [storeToken](../wiki/AuthenticationTokenStore#storetoken)

## Methods

### retrieveToken

▸ **retrieveToken**(): ``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)

Attempts to get the [AuthenticationToken](../wiki/AuthenticationToken)

#### Returns

``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken)

the [AuthenticationToken](../wiki/AuthenticationToken) if stored otherwise `null`

#### Defined in

[authentication/AuthenticationTokenStore.ts:11](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenStore.ts#L11)

___

### storeToken

▸ **storeToken**(`token`): `void`

Stores an [AuthenticationToken](../wiki/AuthenticationToken)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | ``null`` \| [`AuthenticationToken`](../wiki/AuthenticationToken) | The token to store or `null` to clear |

#### Returns

`void`

#### Defined in

[authentication/AuthenticationTokenStore.ts:16](https://github.com/flexbase-eng/http-client-middleware/blob/9e54f5b/src/authentication/AuthenticationTokenStore.ts#L16)
