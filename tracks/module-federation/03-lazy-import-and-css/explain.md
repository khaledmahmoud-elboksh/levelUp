# Lazy import and CSS cleanup

The shell should download a remote only when the route opens, and it should remove remote CSS that would restyle the host after you leave.

## Where it lives

- `ops-center/src/pages/Modules/PromotionEngineModule/PromotionEngineModule.tsx` lazy-imports the expose.
- `standalone-program-center/src/pages/Modules/LoyaltyTransactionsModule/LoyaltyTransactionsModule.tsx` does the same for loyalty.
- The finally block calls `removeCssLinks` for that remote's styles.

## Shape

```ts
lazy(() =>
  import("promotion_engine/promotion-engine-micro-fe-app")
    .catch((error) => ({ default: () => <MicroFrontendError error={error} /> }))
    .finally(() => removeCssLinks("promotion_engine"))
)
```

## What breaks if you skip it

The shell downloads every remote at startup. Or promotion CSS remains after you navigate to wallets and both themes apply.
