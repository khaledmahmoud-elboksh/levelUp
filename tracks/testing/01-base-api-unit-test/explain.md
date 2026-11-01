# Mock fetchBaseQuery for the 401 path

The refresh wrapper is the riskiest shared function. The loyalty test drives it without a server by mocking fetchBaseQuery.

## Where it lives

- `loyalty-transactions-frontend/src/store/apis/BaseApi.test.ts`
- It sets the host runtime, mocks the RTK fetch module, and asserts 401 versus 403.
- Promotion has a related `withToken.integration.test.tsx`.

## Shape

```ts
vi.mock("@reduxjs/toolkit/query/react", () => ({
  fetchBaseQuery: () => mockQuery,
}));

// 403 must not call refresh
// 401 calls refresh once, then the query again
```

## What breaks if you skip it

A baseQuery change ships because the only check was a manual click. The 403 path starts refreshing in production.
