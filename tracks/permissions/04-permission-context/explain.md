# PermissionContext is the CRUD for one screen

A table should not call the path walker four times for read, create, update, and delete. The page resolves those booleans once and passes them down.

## Where it lives

- `ops-center/src/context/PermissionContext.tsx` exports `PermissionProvider`, `usePermissions`, `useCanCreate`.
- Standalone has the same context.
- Path checks stay in `useCheckUserPermission` for routes and one-off buttons.

## Shape

```ts
<PermissionProvider value={{ create: false, delete: true, read: true, update: false }}>
  {useCanCreate() ? <CreateButton /> : null}
</PermissionProvider>
```

## What breaks if you skip it

Every row repeats the path arrays and they drift. A create button stays after the page-level flag was turned off.
