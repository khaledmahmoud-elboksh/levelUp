# Hands-on: Production-only Amplitude

This lab is reading only. There is no exercise to reset.

Trace these files:

`C:\Users\khaled.mahmoud\Desktop\Dsquares\wallets-frontend\src\utility\amplitude.ts`

`C:\Users\khaled.mahmoud\Desktop\Dsquares\bulk-actions-frontend\src\utility\amplitude.ts`

`C:\Users\khaled.mahmoud\Desktop\Dsquares\bulk-actions-frontend\src\utility\tracking.ts`

`C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\utility\amplitude.ts`

`C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\utility\trackingCatalog.ts`

Find the production check in `initializeAmplitude` and the same check in `runWhenReady`. In bulk-actions, promotion-engine, and loyalty-transactions, confirm the key constant is in `amplitude.ts`, `App` calls `initializeAmplitude()` with no argument, and `app.config.ts` has no Amplitude field. Wallets still keeps the key on its production config object.
