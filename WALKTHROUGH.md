# How to go through levelUp

This gym lives at `C:\Users\khaled.mahmoud\Desktop\Dsquares\levelUp`. The real product code stays in the sibling repos. Labs quote a short shape and name the file to open. They do not replace those repos.

## Rules for every session

1. Read `explain.md`.
2. Do `hands-on.md`.
3. Answer `quiz.md` with `quiz.answers.md` closed.
4. Open the answers and tick the box below.
5. Stop. One session is one lab. Do not start the next lab in the same sitting.

Session 1 is the exception: read the gotchas checklist and leave its quiz closed. Session 44 is that quiz.

## Reset an exercise

The five functions under `exercises/` are already solved, so `npm test` stays green. When a session names an exercise:

1. Replace the exported function body with `throw new Error("not implemented")`.
2. Run the test file printed in that session.
3. Make it pass.
4. Restore the file with git when you want the suite green again.

```powershell
cd C:\Users\khaled.mahmoud\Desktop\Dsquares\levelUp
npm test
```

## Sessions

## Session 1. Memorize the workspace gotchas

Folder: `tracks/gotchas/01-checklist`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\AGENTS.md`

Do: Read the checklist. Leave quiz.md closed until the last session.

- [ ] Session 1

## Session 2. DEPLOYMENT_ENV and the two config files

Folder: `tracks/runtime-config/01-deployment-env`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\public\app-config.json`

Do: Compare the wallets remote URL in both shell config files.

- [ ] Session 2

## Session 3. The host runtime URL contract

Folder: `tracks/runtime-config/02-host-runtime-contract`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\runtime\hostApiConfig.ts`

Do: Trace getResolvedApiConfig for ops mount, runtime pair, and fallback.

- [ ] Session 3

## Session 4. Standalone dev proxy for /bff

Folder: `tracks/runtime-config/03-bff-dev-proxy`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\standalone-program-center\rsbuild.config.ts`

Do: Find the /bff proxy and the localhost remote override.

- [ ] Session 4

## Session 5. Normalize a host base URL

Folder: `tracks/runtime-config/04-url-normalizer`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\runtime\hostApiConfig.ts`

Do: Reset normalizeHostBaseUrl and run its Vitest file.

- [ ] Session 5

## Session 6. Two stores for the same token

Folder: `tracks/secure-storage/01-two-stores`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\utility\localStorageSecureWrapper.ts`

Do: Compare the wrapper prefix with the react-secure-storage import.

- [ ] Session 6

## Session 7. ProtectedRoutes sends you to login or forbidden

Folder: `tracks/permissions/01-protected-routes`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\router\ProtectedRoutes.tsx`

Do: Trace the login redirect and the forbidden redirect.

- [ ] Session 7

## Session 8. Menu key, URL, and permission path stay aligned

Folder: `tracks/permissions/02-menu-route-alignment`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\standalone-program-center\src\components\Sidebar\CONSTANTS.tsx`

Do: Write the loyalty key, URL, and permission path from standalone.

- [ ] Session 8

## Session 9. Walk a permission tree

Folder: `tracks/permissions/03-permission-path`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\hooks\useCheckUserPermission.ts`

Do: Reset checkPermission and run its Vitest file. Contrast Ops Center (missing path grants) with promo/bulk fail-closed hooks.

- [ ] Session 9

## Session 10. PermissionContext is the CRUD for one screen

Folder: `tracks/permissions/04-permission-context`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\context\PermissionContext.tsx`

Do: Contrast PermissionContext with useCheckUserPermission.

- [ ] Session 10

## Session 11. Shell login decodes the Google credential

Folder: `tracks/permissions/05-google-login`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\pages\Modules\AuthenticationModule\Login\Login.tsx`

Do: Find GoogleOAuthProvider and the jwtDecode call. Do not copy client ids.

- [ ] Session 11

## Session 12. Layer the RTK base query

Folder: `tracks/data-layer/01-base-query-layers`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\store\apis\BaseApi.tsx`

Do: Write the baseQuery wrapper order from outside in.

- [ ] Session 12

## Session 13. Refresh once on 401

Folder: `tracks/data-layer/02-retry-on-401`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\store\apis\BaseApi.tsx`

Do: Reset queryWithRefresh and run its Vitest file.

- [ ] Session 13

## Session 14. GeneralGridV2 plus a page-local query hook

Folder: `tracks/data-layer/03-general-grid`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\claims-frontend\src\components\GeneralGridV2\GeneralGridV2.tsx`

Do: Separate what Root owns from what the page hook owns.

- [ ] Session 14

## Session 15. ToastProvider owns the antd message instance

Folder: `tracks/toasts/01-toast-provider`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\context\ToastContext.tsx`

Do: Read ToastProvider and the useToast guard.

- [ ] Session 15

## Session 16. The base query toasts from outside React

Folder: `tracks/toasts/02-message-toast-outside-react`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\store\apis\BaseApi.tsx`

Do: Find notifyOnFailure and confirm it sees the final result.

- [ ] Session 16

## Session 17. Form rules render ErrorAlert

Folder: `tracks/ui-forms/01-error-alert-rules`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\sku-frontend\src\pages\SkuMutation\SkuMutation.tsx`

Do: Copy the shape of one Form.Item rule that uses ErrorAlert.

- [ ] Session 17

## Session 18. Empty, loading, and error are three states

Folder: `tracks/ui-forms/02-empty-loading-error`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\pages\Modules\LoyaltyTransactionModule\TransactionsTable\Components\SelectionContext.tsx`

Do: Explain isLoading versus isFetching for an empty dropdown.

- [ ] Session 18

## Session 19. ConfigProvider and dayjs plugins

Folder: `tracks/ui-forms/03-config-provider-and-dayjs`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\models\Common\Filters.ts`

Do: Find one dayjs.extend and one ConfigProvider theme.

- [ ] Session 19

## Session 20. A wizard keeps currentStep next to Steps

Folder: `tracks/wizards/01-create-offer-steps`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\pages\CreateOfferCampaign\CreateOfferCampaignSteps.tsx`

Do: Find currentStep, the Steps current prop, and one Form.useWatch.

- [ ] Session 20

## Session 21. normalizeBy builds a lookup

Folder: `tracks/shared-utilities/01-normalize-by`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\bulk-actions-frontend\src\utility\index.ts`

Do: Reset normalizeBy, pass the tests, then find it in TagSelect.

- [ ] Session 21

## Session 22. TagSelect caps and hides selected options

Folder: `tracks/antd-widgets/01-tag-select`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\reward-campaign-frontend\src\components\TagSelect\TagSelect.tsx`

Do: Explain slice(-maxCount) and the blur when the cap is hit.

- [ ] Session 22

## Session 23. ImageUploader crops, then stores base64

Folder: `tracks/antd-widgets/02-image-uploader`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\reward-campaign-frontend\src\components\ImageUploader\ImageUploader.tsx`

Do: List the size and type checks, and how value maps to fileList.

- [ ] Session 23

## Session 24. OTP swaps in an antd Input

Folder: `tracks/antd-widgets/03-otp-render-input`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\pages\Modules\AuthenticationModule\OTP\OTP.tsx`

Do: Read renderInput and count the OTP cells.

- [ ] Session 24

## Session 25. CopyOnClick stops the row click

Folder: `tracks/antd-widgets/04-copy-on-click`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\components\CopyOnClick\CopyOnClick.tsx`

Do: Name the copy library, the tooltip, and the toast in CopyOnClick.

- [ ] Session 25

## Session 26. EditorWithSuggestion inserts mentions on {{

Folder: `tracks/rich-text/01-editor-with-suggestion`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\reward-campaign-frontend\src\components\EditorWithSuggestion\suggestion.ts`

Do: Write the {{ trigger and the renderText token.

- [ ] Session 26

## Session 27. Boot i18next for English and Arabic

Folder: `tracks/i18n/01-en-ar-boot`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\i18n\index.ts`

Do: Write the query key, storage key, namespace, and fallback.

- [ ] Session 27

## Session 28. Register a remote in both shells

Folder: `tracks/module-federation/01-dual-shell-registration`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\module-federation.config.ts`

Do: Match one remote's expose name to both shell configs.

- [ ] Session 28

## Session 29. loaded-first avoids eager remote fetches

Folder: `tracks/module-federation/02-loaded-first`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\standalone-program-center\module-federation.config.ts`

Do: Read the loaded-first comment and name the Network symptom.

- [ ] Session 29

## Session 30. Lazy import and CSS cleanup

Folder: `tracks/module-federation/03-lazy-import-and-css`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\pages\Modules\PromotionEngineModule\PromotionEngineModule.tsx`

Do: Match the lazy import string to removeCssLinks.

- [ ] Session 30

## Session 31. withShadowDOM isolates remote CSS

Folder: `tracks/module-federation/04-shadow-dom`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\HOC\withShadowDom.tsx`

Do: Find attachShadow, createCache, and getPopupContainer.

- [ ] Session 31

## Session 32. withMicroFrontendWrapper frames the remote

Folder: `tracks/module-federation/05-micro-frontend-wrapper`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\HOC\withMicroFrontendWrapper.tsx`

Do: Name the retry event and the collapsed width class.

- [ ] Session 32

## Session 33. MicroFrontendError replaces a failed import

Folder: `tracks/module-federation/06-micro-frontend-error`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\ops-center\src\pages\Modules\WalletsModule\WalletsModule.tsx`

Do: Check microAppName against the wallets remote.

- [ ] Session 33

## Session 34. echarts.init versus echarts-for-react

Folder: `tracks/charts/01-echarts-two-mounts`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\wallets-frontend\src\pages\WalletsSearch\components\AnalyticsStatusCharts\AnalyticsStatusCharts.tsx`

Do: Find chart.dispose and the shell React wrapper.

- [ ] Session 34

## Session 35. SideBySideDiff is built on the diff package

Folder: `tracks/diff-view/01-side-by-side`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\claims-frontend\src\components\SideBySideDiff\utils.ts`

Do: Find safeJsonParse and computeVisibleRanges.

- [ ] Session 35

## Session 36. Merge context windows

Folder: `tracks/diff-view/02-diff-context-ranges`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\claims-frontend\src\components\SideBySideDiff\utils.ts`

Do: Reset computeVisibleRanges and run its Vitest file.

- [ ] Session 36

## Session 37. Count CSV rows with SheetJS

Folder: `tracks/spreadsheets/01-csv-row-count`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\bulk-actions-frontend\src\utility\index.ts`

Do: Compare readAsArrayBuffer with XLSX.read type binary.

- [ ] Session 37

## Session 38. Mock fetchBaseQuery for the 401 path

Folder: `tracks/testing/01-base-api-unit-test`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\store\apis\BaseApi.test.ts`

Do: Find the 401 and 403 cases in BaseApi.test.ts.

- [ ] Session 38

## Session 39. Playwright guards shadow DOM styles

Folder: `tracks/testing/02-shadow-playwright`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\e2e\shadow-styles.spec.ts`

Do: Find the manifest abort and say what it protects.

- [ ] Session 39

## Session 40. Run the check that repo actually has

Folder: `tracks/testing/03-which-command`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\AGENTS.md`

Do: Copy the minimum check for promotion, wallets, and the BFF.

- [ ] Session 40

## Session 41. The BFF exchanges a token per downstream service

Folder: `tracks/bff/01-external-proxy`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\dsq.programcenter.bff\src\DSQ.ProgramCenter.Bff.Api\Controllers\ExternalServiceProxyController.cs`

Do: Trace api/external/{service} to the forward. Do not copy secrets.

- [ ] Session 41

## Session 42. Controllers send a request, handlers do the work

Folder: `tracks/bff/02-mediatr-and-validation`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\dsq.programcenter.bff\src\DSQ.ProgramCenter.Bff.Application\Features\Rbac\Roles\RoleHandlers.cs`

Do: Match one controller Send call to its handler.

- [ ] Session 42

## Session 43. Keycloak issuer is resolved per request

Folder: `tracks/bff/03-keycloak-per-request-issuer`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\dsq.programcenter.bff\src\DSQ.ProgramCenter.Bff.Api\Program.cs`

Do: Find IssuerValidator and say why Authority is not a single string.

- [ ] Session 43

## Session 44. Gotchas quiz

Folder: `tracks/gotchas/01-checklist`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\AGENTS.md`

Do: Open quiz.md now. Answer it with quiz.answers.md closed, then check yourself.

- [ ] Session 44

## Session 45. Amplitude loads only in production

Folder: `tracks/analytics/01-production-amplitude`

Trace: `C:\Users\khaled.mahmoud\Desktop\Dsquares\promotion-engine-frontend\src\utility\amplitude.ts`

Also: `C:\Users\khaled.mahmoud\Desktop\Dsquares\loyalty-transactions-frontend\src\utility\amplitude.ts`

Do: Compare the production check with bulk-actions. Confirm `App` calls `initializeAmplitude()` with no argument, track is a no-op outside production, and promo and loyalty `trackingCatalog` files only allowslisted event properties.

- [ ] Session 45

## Progress

- [ ] Session 1. Memorize the workspace gotchas
- [ ] Session 2. DEPLOYMENT_ENV and the two config files
- [ ] Session 3. The host runtime URL contract
- [ ] Session 4. Standalone dev proxy for /bff
- [ ] Session 5. Normalize a host base URL
- [ ] Session 6. Two stores for the same token
- [ ] Session 7. ProtectedRoutes sends you to login or forbidden
- [ ] Session 8. Menu key, URL, and permission path stay aligned
- [ ] Session 9. Walk a permission tree
- [ ] Session 10. PermissionContext is the CRUD for one screen
- [ ] Session 11. Shell login decodes the Google credential
- [ ] Session 12. Layer the RTK base query
- [ ] Session 13. Refresh once on 401
- [ ] Session 14. GeneralGridV2 plus a page-local query hook
- [ ] Session 15. ToastProvider owns the antd message instance
- [ ] Session 16. The base query toasts from outside React
- [ ] Session 17. Form rules render ErrorAlert
- [ ] Session 18. Empty, loading, and error are three states
- [ ] Session 19. ConfigProvider and dayjs plugins
- [ ] Session 20. A wizard keeps currentStep next to Steps
- [ ] Session 21. normalizeBy builds a lookup
- [ ] Session 22. TagSelect caps and hides selected options
- [ ] Session 23. ImageUploader crops, then stores base64
- [ ] Session 24. OTP swaps in an antd Input
- [ ] Session 25. CopyOnClick stops the row click
- [ ] Session 26. EditorWithSuggestion inserts mentions on {{
- [ ] Session 27. Boot i18next for English and Arabic
- [ ] Session 28. Register a remote in both shells
- [ ] Session 29. loaded-first avoids eager remote fetches
- [ ] Session 30. Lazy import and CSS cleanup
- [ ] Session 31. withShadowDOM isolates remote CSS
- [ ] Session 32. withMicroFrontendWrapper frames the remote
- [ ] Session 33. MicroFrontendError replaces a failed import
- [ ] Session 34. echarts.init versus echarts-for-react
- [ ] Session 35. SideBySideDiff is built on the diff package
- [ ] Session 36. Merge context windows
- [ ] Session 37. Count CSV rows with SheetJS
- [ ] Session 38. Mock fetchBaseQuery for the 401 path
- [ ] Session 39. Playwright guards shadow DOM styles
- [ ] Session 40. Run the check that repo actually has
- [ ] Session 41. The BFF exchanges a token per downstream service
- [ ] Session 42. Controllers send a request, handlers do the work
- [ ] Session 43. Keycloak issuer is resolved per request
- [ ] Session 44. Gotchas quiz
- [ ] Session 45. Amplitude loads only in production

When a later work session changes a pattern that shows up in more than one repo, or a shell, remote, or BFF contract, add or update the lab and add a session here.
