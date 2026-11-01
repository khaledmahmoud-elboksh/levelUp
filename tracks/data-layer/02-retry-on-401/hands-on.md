# Hands-on: Refresh once on 401

Reset queryWithRefresh. Tests require one refresh and one replay on 401, no replay when refresh returns false, no second refresh, and no refresh on 403.

Trace this file:

`C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\store\apis\BaseApi.tsx`

Exercise: `exercises/retry-on-401/queryWithRefresh.test.ts`

To practice, replace the exported function body with `throw new Error("not implemented")`, then run:

```powershell
npm test -- exercises/retry-on-401/queryWithRefresh.test.ts
```

When you want the whole suite green again, restore the file with git.

