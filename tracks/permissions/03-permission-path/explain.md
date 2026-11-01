# Walk a permission tree

Permissions are a tree of pages, components, and features. A check is a path of keys, not a flat string compare.

## Where it lives

- `ops-center/src/utility/permissionsUtilities.ts` exports `findPermissionItemByPath`.
- `ops-center/src/hooks/useCheckUserPermission.ts` exports `checkUserPermission`.
- The gym copy is `levelUp/exercises/permission-path/checkPermission.ts`.

## Shape

```ts
if (user?.accessAll) return true;
if (!path) return true;
if (userPermissions.length === 0) return undefined;
return foundItem ? foundItem.isSelected : false;
```

## What breaks if you skip it

A button stays visible for a user whose feature isSelected is false. Or an empty permission payload is treated as deny and locks an accessAll admin.
