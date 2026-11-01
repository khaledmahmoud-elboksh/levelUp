# The base query toasts from outside React

RTK baseQuery is not a component, so it cannot call useToast. The repos keep a message instance that the query layer can open.

## Where it lives

- `loyalty-transactions-frontend/src/store/apis/BaseApi.tsx` calls `messageToast.open` when `notifyOnFailure` or `notifyOnSuccess` is set.
- The flag lives on the endpoint extraOptions, not inside every queryFn.
- This is the same antd message, reached from the data layer.

## Shape

```ts
if (result.error && extraOptions?.notifyOnFailure) {
  messageToast.open({ type: "warning", content: errorMessage, icon: <WarningIcon /> });
}
```

## What breaks if you skip it

Every endpoint shows its own toast, including ones that failed over a 401 that was then retried. Or no toast appears because the static message was never given a holder.
