# Refresh once on 401

A 401 can mean the access token expired. A 403 means the token is valid and the user is not allowed. Only the first case should refresh and replay.

## Where it lives

- `loyalty-transactions-frontend/src/store/apis/BaseApi.tsx` calls `recoverSession` only when status or originalStatus is 401.
- The gym copy is `levelUp/exercises/retry-on-401/queryWithRefresh.ts`.

## Shape

```ts
if (result.error?.status === 401 || result.error?.originalStatus === 401) {
  const retry = await recoverSession(...);
  if (retry) result = await baseQuery(args, api, extraOptions);
}
```

## What breaks if you skip it

A 403 storm refreshes forever. Or a replay that is still 401 refreshes again and loops.
