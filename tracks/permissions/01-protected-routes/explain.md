# ProtectedRoutes sends you to login or forbidden

A route needs two different failures: no session, and a session that lacks the permission path. One component handles both before the page renders.

## Where it lives

- `ops-center/src/router/ProtectedRoutes.tsx`
- `ops-center/src/router/routes.tsx` wraps a route with `permissions` through `generateRoutes`.
- Standalone has the same pair of files.

## Shape

```ts
if (!accessToken) return <Navigate to="/login" state={{ from: location }} />;
if (!allowed) return <Navigate to="/forbidden" />;
return <Outlet />;
```

## What breaks if you skip it

A deep link renders the remote and then fails inside it. Or every logged-in user can open a page that the menu hid.
