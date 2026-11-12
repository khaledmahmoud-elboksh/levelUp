# Hands-on: Resolve page access from permissions

Reset resolvePageAccess. The tests cover the honored request, the download-only deny, both fallback directions, and the granted-tab case.

Trace these files:

- `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\pages\ExportCouponPoolBatches\utility\resolveExportPageAccess.ts`
- `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\utility\permissionsUtilities.ts`
- `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\pages\CouponPools\utility\resolveDropdownItems.tsx`

Exercise: `exercises/derived-access/resolvePageAccess.test.ts`

To practice, replace the exported function body with `throw new Error("not implemented")`, then run:

```powershell
npm test -- exercises/derived-access/resolvePageAccess.test.ts
```

When you want the whole suite green again, restore the file with git.
