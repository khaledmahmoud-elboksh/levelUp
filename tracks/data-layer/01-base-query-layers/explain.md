# Layer the RTK base query

Every endpoint needs a base URL, an auth header, a 401 refresh, and optional toasts. Those concerns are wrappers, not copy-paste inside each endpoint.

## Where it lives

- `loyalty-transactions-frontend/src/store/apis/BaseApi.tsx` defines `baseQueryWithRefresh`, `baseQueryWithNotification`, and the tokenized variant.
- The same stack exists in claims, ops-center, bulk-actions, dynamic-tiering, and channels.
- `getResolvedApiConfig()` supplies the base URL before `fetchBaseQuery` is created.

## Shape

```ts
const baseQueryWithNotification = async (args, api, extraOptions) => {
  const result = await baseQueryWithRefresh(args, api, extraOptions);
  if (result.error && extraOptions?.notifyOnFailure) messageToast.open(...);
  return result;
};
```

## What breaks if you skip it

Each endpoint refreshes in its own way, a toast fires on a 401 that is about to be retried, or a missing token still hits the network.
