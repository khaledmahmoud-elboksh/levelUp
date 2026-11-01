# Menu key, URL, and permission path stay aligned

Hiding a sidebar row is not the same as blocking the URL. The menu key, the route, and the BFF permission path are three strings that must describe one screen.

## Where it lives

- `ops-center/src/components/Sidebar/CONSTANTS.tsx` maps keys to route suffixes.
- `standalone-program-center/src/components/Sidebar/CONSTANTS.tsx` also has permission path arrays.
- `standalone-program-center/src/router/promotionEngineAccess.ts` guards promotion pages by path prefix.

## Shape

```ts
LoyaltyTransactions -> "/loyalty-transactions"
permission path -> ["PointingSystem", "LoyaltyTransactions", "Transactions", "ViewPage"]
```

## What breaks if you skip it

The menu shows a link the route then forbids, or a bookmarked URL opens a screen the menu correctly hid.
