# ToastProvider owns the antd message instance

antd message needs a context holder inside React, or the toast renders outside your theme and your tests. Every frontend wraps the tree once.

## Where it lives

- `loyalty-transactions-frontend/src/context/ToastContext.tsx` exports `ToastProvider` and `useToast`.
- The same context exists in all 12 frontends.
- `useToast` throws when a component calls it outside the provider.

## Shape

```ts
const [messageApi, contextHolder] = message.useMessage();
return (
  <ToastContext.Provider value={messageApi}>
    <div aria-live="assertive" className="toast-live-region">{contextHolder}</div>
    {children}
  </ToastContext.Provider>
);
```

## What breaks if you skip it

message.success() from a static import misses the theme and the live region. A screen calls useToast above the provider and crashes the tree.
