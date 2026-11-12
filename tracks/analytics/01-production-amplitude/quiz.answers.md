# Answers: Production-only Amplitude

1. `production`. An init that already finished or failed returns before another script is added. Wallets also returns when the key argument is missing.

2. It returns immediately. The event is not queued and the script is not requested.

3. In `amplitude.ts` for bulk-actions, promotion-engine, and loyalty-transactions, beside the CDN loader. Wallets still puts it on the production object in `app.config.ts`. It stays out of `.env`, Docker build arguments, `deployments-gitops`, and this gym. Staging and local builds do not call init.
