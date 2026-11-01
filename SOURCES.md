# Sources

Each lab points at the product file it was taken from. Update this list when you change a lab.

## tracks/gotchas/01-checklist

- `AGENTS.md`
- `ops-center/module-federation.config.ts`
- `standalone-program-center/src/app.config.ts`

## tracks/runtime-config/01-deployment-env

- `ops-center/public/app-config.json`
- `standalone-program-center/src/app.config.ts`

## tracks/runtime-config/02-host-runtime-contract

- `promotion-engine-frontend/src/runtime/hostApiConfig.ts`

## tracks/runtime-config/03-bff-dev-proxy

- `standalone-program-center/rsbuild.config.ts`
- `standalone-program-center/src/app.config.ts`

## tracks/runtime-config/04-url-normalizer

- `promotion-engine-frontend/src/runtime/hostApiConfig.ts`
- `levelUp/exercises/url-normalizer/normalizeHostBaseUrl.ts`

## tracks/secure-storage/01-two-stores

- `ops-center/src/utility/localStorageSecureWrapper.ts`
- `bulk-actions-frontend/src/store/utils.ts`

## tracks/permissions/01-protected-routes

- `ops-center/src/router/ProtectedRoutes.tsx`
- `ops-center/src/router/routes.tsx`

## tracks/permissions/02-menu-route-alignment

- `standalone-program-center/src/components/Sidebar/CONSTANTS.tsx`
- `ops-center/src/components/Sidebar/CONSTANTS.tsx`

## tracks/permissions/03-permission-path

- `ops-center/src/hooks/useCheckUserPermission.ts`
- `ops-center/src/utility/permissionsUtilities.ts`

## tracks/permissions/04-permission-context

- `ops-center/src/context/PermissionContext.tsx`
- `ops-center/src/hooks/useCheckUserPermission.ts`

## tracks/permissions/05-google-login

- `ops-center/src/App.tsx`
- `ops-center/src/pages/Modules/AuthenticationModule/Login/Login.tsx`

## tracks/data-layer/01-base-query-layers

- `loyalty-transactions-frontend/src/store/apis/BaseApi.tsx`

## tracks/data-layer/02-retry-on-401

- `loyalty-transactions-frontend/src/store/apis/BaseApi.tsx`
- `levelUp/exercises/retry-on-401/queryWithRefresh.ts`

## tracks/data-layer/03-general-grid

- `claims-frontend/src/components/GeneralGridV2/GeneralGridV2.tsx`
- `claims-frontend/src/pages/Modules/TransactionModule/TransactionsTable/Vouchers.tsx`

## tracks/toasts/01-toast-provider

- `loyalty-transactions-frontend/src/context/ToastContext.tsx`

## tracks/toasts/02-message-toast-outside-react

- `loyalty-transactions-frontend/src/store/apis/BaseApi.tsx`

## tracks/ui-forms/01-error-alert-rules

- `sku-frontend/src/pages/SkuMutation/SkuMutation.tsx`

## tracks/ui-forms/02-empty-loading-error

- `loyalty-transactions-frontend/src/pages/Modules/LoyaltyTransactionModule/TransactionsTable/Components/SelectionContext.tsx`

## tracks/ui-forms/03-config-provider-and-dayjs

- `promotion-engine-frontend/src/models/Common/Filters.ts`
- `ops-center/src/components/PushMonitor/PushMonitorPopup.tsx`

## tracks/wizards/01-create-offer-steps

- `promotion-engine-frontend/src/pages/CreateOfferCampaign/CreateOfferCampaignSteps.tsx`

## tracks/shared-utilities/01-normalize-by

- `bulk-actions-frontend/src/utility/index.ts`
- `reward-campaign-frontend/src/components/TagSelect/TagSelect.tsx`

## tracks/antd-widgets/01-tag-select

- `reward-campaign-frontend/src/components/TagSelect/TagSelect.tsx`

## tracks/antd-widgets/02-image-uploader

- `reward-campaign-frontend/src/components/ImageUploader/ImageUploader.tsx`

## tracks/antd-widgets/03-otp-render-input

- `ops-center/src/pages/Modules/AuthenticationModule/OTP/OTP.tsx`

## tracks/antd-widgets/04-copy-on-click

- `ops-center/src/components/CopyOnClick/CopyOnClick.tsx`

## tracks/rich-text/01-editor-with-suggestion

- `reward-campaign-frontend/src/components/EditorWithSuggestion/EditorWithSuggestion.tsx`
- `reward-campaign-frontend/src/components/EditorWithSuggestion/suggestion.ts`

## tracks/i18n/01-en-ar-boot

- `loyalty-transactions-frontend/src/i18n/index.ts`

## tracks/module-federation/01-dual-shell-registration

- `ops-center/module-federation.config.ts`
- `standalone-program-center/module-federation.config.ts`
- `promotion-engine-frontend/module-federation.config.ts`

## tracks/module-federation/02-loaded-first

- `standalone-program-center/module-federation.config.ts`
- `ops-center/module-federation.config.ts`

## tracks/module-federation/03-lazy-import-and-css

- `ops-center/src/pages/Modules/PromotionEngineModule/PromotionEngineModule.tsx`

## tracks/module-federation/04-shadow-dom

- `loyalty-transactions-frontend/src/HOC/withShadowDom.tsx`

## tracks/module-federation/05-micro-frontend-wrapper

- `ops-center/src/HOC/withMicroFrontendWrapper.tsx`

## tracks/module-federation/06-micro-frontend-error

- `ops-center/src/pages/Modules/WalletsModule/WalletsModule.tsx`

## tracks/charts/01-echarts-two-mounts

- `wallets-frontend/src/pages/WalletsSearch/components/AnalyticsStatusCharts/AnalyticsStatusCharts.tsx`

## tracks/diff-view/01-side-by-side

- `claims-frontend/src/components/SideBySideDiff/utils.ts`
- `claims-frontend/src/components/SideBySideDiff/index.tsx`

## tracks/diff-view/02-diff-context-ranges

- `claims-frontend/src/components/SideBySideDiff/utils.ts`

## tracks/spreadsheets/01-csv-row-count

- `bulk-actions-frontend/src/utility/index.ts`

## tracks/testing/01-base-api-unit-test

- `loyalty-transactions-frontend/src/store/apis/BaseApi.test.ts`

## tracks/testing/02-shadow-playwright

- `promotion-engine-frontend/e2e/shadow-styles.spec.ts`

## tracks/testing/03-which-command

- `AGENTS.md`

## tracks/bff/01-external-proxy

- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Api/Controllers/ExternalServiceProxyController.cs`

## tracks/bff/02-mediatr-and-validation

- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Application/DependencyInjection.cs`
- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Application/Features/Rbac/Roles/RoleHandlers.cs`

## tracks/bff/03-keycloak-per-request-issuer

- `dsq.programcenter.bff/src/DSQ.ProgramCenter.Bff.Api/Program.cs`

## Left out on purpose

These showed up in a repo and are not labs:

- `antd-style` is declared in a few package.json files and has no imports.
- `@headlessui/react` `Transition` is only a couple of merchant wizard steps.
- `react-markdown` is only the ops-center agentic chat.
- `react-phone-number-input` is one SMS preview modal copied in pointing-system-settings and reward-campaign.
- Mixpanel, react-ga, and `@microsoft/clarity` are analytics calls.
- Shell login's `@react-oauth/google` and `jwt-decode` are a short note on the permissions track, not their own folder.
