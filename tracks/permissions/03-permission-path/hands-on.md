# Hands-on: Walk a permission tree

Reset checkPermission and findPermissionItemByPath. The tests cover accessAll, a missing path, an empty list, a four-segment hit, and a missing segment.

Trace this file:

`C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\hooks\useCheckUserPermission.ts`

Exercise: `exercises/permission-path/checkPermission.test.ts`

To practice, replace the exported function body with `throw new Error("not implemented")`, then run:

```powershell
npm test -- exercises/permission-path/checkPermission.test.ts
```

When you want the whole suite green again, restore the file with git.

