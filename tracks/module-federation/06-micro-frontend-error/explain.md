# MicroFrontendError replaces a failed import

import() rejects when remoteEntry is down. The lazy call must still return a component, or React renders nothing and the console is the only clue.

## Where it lives

- `ops-center/src/pages/Modules/WalletsModule/WalletsModule.tsx` is one of many modules with the same catch.
- The component lives with the shell error UI, imported as `MicroFrontendError`.
- Standalone repeats the pattern.

## Shape

```ts
lazy(() =>
  import("wallets/wallets-micro-fe-app").catch((error) => ({
    default: () => <MicroFrontendError microAppName="Wallets" error={error} />,
  }))
)
```

## What breaks if you skip it

The content pane is white. The user refreshes the whole shell. The module name in the error is wrong, so they restart the wrong dev server.
