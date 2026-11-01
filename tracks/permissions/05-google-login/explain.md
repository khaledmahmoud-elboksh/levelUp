# Shell login decodes the Google credential

The shells, not the remotes, start the Google sign-in. The credential is a JWT the login page decodes before it talks to the BFF.

## Where it lives

- `ops-center/src/App.tsx` wraps the tree in `GoogleOAuthProvider`.
- `ops-center/src/pages/Modules/AuthenticationModule/Login/Login.tsx` imports `jwtDecode`.
- Standalone repeats both files. This is a shell concern. Do not add the provider inside a remote.

## Shape

```ts
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

<GoogleOAuthProvider clientId={Config.GOOGLE_CLIENT_ID}>
```

## What breaks if you skip it

A remote ships its own Google client id, or the login page treats the credential string as the API access token.
