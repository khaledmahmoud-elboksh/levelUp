# Walk a permission tree

Permissions are a tree of pages, components, and features. A check is a path of keys, not a flat string compare.

## Where it lives

- `ops-center/src/utility/permissionsUtilities.ts` exports `findPermissionItemByPath`.
- `ops-center/src/hooks/useCheckUserPermission.ts` exports `checkUserPermission`.
- `bulk-actions-frontend` and `promotion-engine-frontend` keep the same walker plus a fail-closed hook (`missing path` → `false`) with reactive `localStorage` via `useSyncExternalStore`.
- The gym copy is `levelUp/exercises/permission-path/checkPermission.ts`.

## Shape

```ts
if (user?.accessAll) return true;
if (!path) return false; // remotes; Ops Center still grants on a missing path
if (userPermissions.length === 0) return undefined;
return foundItem ? foundItem.isSelected : false;
```

## What breaks if you skip it

A button stays visible for a user whose feature isSelected is false. Or an empty permission payload is treated as deny and locks an accessAll admin. Ops Center still allows a missing path. Bulk Actions and Promotion Engine deny a missing path; `accessAll` is their only unconditional grant. The walk order is unchanged: children, then components, then features, and the first non-empty branch wins.
