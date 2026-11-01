# GeneralGridV2 plus a page-local query hook

List screens share paging, sorting, and filters. The API body is different on every screen, so the grid calls a hook the page supplies.

## Where it lives

- `claims-frontend/src/components/GeneralGridV2/GeneralGridV2.tsx` exports `Root` and the `GridQueryHook` type.
- The same component is copied in loyalty, ops-center, standalone, and channels. It is not an npm package.
- A page hook example is `useVoucherTransactionsGridQuery` in `claims-frontend/src/pages/Modules/TransactionModule/TransactionsTable/Vouchers.tsx`.

## Shape

```ts
<GeneralGridV2.Root
  useQuery={useVoucherTransactionsGridQuery}
  queryParams={{ scopedProgramKey }}
/>

// hook maps page, filters, sortBy into the RTK body
```

## What breaks if you skip it

The grid updates filters and the hook ignores them, so the table never refetches. Or the generic grid learns a voucher field and can no longer serve wallets.
