# Two stores for the same token

Remotes persist the access token in local storage, but they do not all use the same wrapper. A token written by one cannot be read by the other.

## Where it lives

- Most remotes and both shells use `localStorageSecureWrapper`, for example `ops-center/src/utility/localStorageSecureWrapper.ts`.
- bulk-actions calls the `react-secure-storage` package from `bulk-actions-frontend/src/store/utils.ts` and its auth slice.
- dynamic-tiering lists the package and also has the hand-rolled wrapper. Check the import before you assume which one a write uses.

## Shape

```ts
const secureKey = "lsSecWrap_" + simpleHash(key);
localStorage.setItem(secureKey, xorEncrypt(toEncrypt));

// bulk-actions, different library, different key
import secureLocalStorage from "react-secure-storage";
```

## What breaks if you skip it

ProtectedRoutes looks logged out because getItem returns null. You then debug Keycloak. The bytes were stored under another key by another algorithm.
