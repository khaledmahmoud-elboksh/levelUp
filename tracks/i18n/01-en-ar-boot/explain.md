# Boot i18next for English and Arabic

Ten frontends detect language the same way. A new repo that invents a third key or a different localStorage name will ignore the shell's ?lng= switch.

## Where it lives

- `loyalty-transactions-frontend/src/i18n/index.ts` is the example.
- Detector order is the query string `lng`, then localStorage key `i18nextLng`.
- Resources use the namespace `translations` and languages `en` and `ar`.

## Shape

```ts
i18n.use(LanguageDetector).use(initReactI18next).init({
  defaultNS: "translations",
  fallbackLng: "en",
  supportedLngs: ["ar", "en"],
  detection: {
    order: ["querystring", "localStorage"],
    lookupQuerystring: "lng",
    lookupLocalStorage: "i18nextLng",
  },
});
```

## What breaks if you skip it

The shell sets ?lng=ar and the remote stays in English because it looked at a different query key. Or strings live in the default namespace and t() looks at translations.
