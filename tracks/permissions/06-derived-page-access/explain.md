# Resolve page access from permissions

A permission-gated page computes what to show from the granted flags. The user's request (which tab they clicked) is never written back over the permission decision; the visible state is derived on every render.

## Where it lives

- `promotion-engine-frontend/src/pages/ExportCouponPoolBatches/utility/resolveExportPageAccess.ts` is the pure resolver: list flag, download flag, audit flag, requested tab, and it returns denied flags plus the visible tab.
- `promotion-engine-frontend/src/utility/permissionsUtilities.ts` is the fail-closed walker behind every flag: `if (!Array.isArray(data)) return null` at the recursion root, an ancestor `isSelected === false` stops the walk, and an empty path returns null.
- `promotion-engine-frontend/src/pages/CouponPools/utility/resolveDropdownItems.tsx` takes its permissions argument with no default, so a forgotten argument fails closed instead of granting everything.
- `promotion-engine-frontend/src/hooks/useCheckUserPermission.ts` grants with `accessAll === true`, matching the runtime check.
- The gym copy is `levelUp/exercises/derived-access/resolvePageAccess.ts`.

## Shape

```ts
const showListTab = canListFiles;
const showAuditTab = canViewAuditLog;
const showActions = canListFiles && canDownload;
if (!showListTab && !showAuditTab) return denied; // download alone has no list to act on
// hidden tab is not repaired in state: the visible tab is derived
if (activeTab === "list" && !showListTab) activeTab = "audit";
```

## What breaks if you skip it

An effect that repairs a forbidden tab selection adds a commit and still loses to a permission change while the tab is open; deriving the tab covers both. A helper with an all-allowed default silently grants every action when a caller forgets the argument. A truthy `accessAll` check grants everything to `accessAll: "false"` while the module guard denies. And a menu entry offered on a flag the destination page denies is a dead end: the card menu must mirror the page's deny rule, or an export-only user sees "Export Batches" and lands on Access Denied.
