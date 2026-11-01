# withMicroFrontendWrapper frames the remote

Every remote page needs a suspense fallback, an error boundary, a width that follows the sidebar, and a retry when the manifest is stale.

## Where it lives

- `ops-center/src/HOC/withMicroFrontendWrapper.tsx`
- Standalone has the same HOC.
- It reads a manifest hook keyed by `microAppName` and listens for `opscenter:mfe-retry`.

## Shape

```ts
window.addEventListener("opscenter:mfe-retry", () => {
  window.location.href = window.location.href + "?cachebuster=" + Date.now();
});

<ErrorBoundary>
  <Suspense fallback={<Spin />}>
    <WrappedComponent />
  </Suspense>
</ErrorBoundary>
```

## What breaks if you skip it

A remote hangs on a blank content area with no spinner. A bad manifest keeps serving the old remoteEntry until a hard refresh, and the sidebar width is ignored so the page sits under the menu.
