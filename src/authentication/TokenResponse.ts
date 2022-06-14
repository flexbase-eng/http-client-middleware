/**
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

*/
export interface TokenResponse {
    /** The access token string as issued by the authorization server */
    access_token: string;
    /** The type of token this is, typically just the string *Bearer* */
    token_type?: string;
    /** If the access token expires, the server should reply with the duration of time the access token is granted for */
    expires_in: number;
    /** If the access token will expire, then it is useful to return a refresh token which applications can use to obtain another access token. However, tokens issued with the implicit grant cannot be issued a refresh token */
    refresh_token?: string;
    /** If the scope the user granted is identical to the scope the app requested, this parameter is optional. If the granted scope is different from the requested scope, such as if the user modified the scope, then this parameter is required */
    scope?: string
}