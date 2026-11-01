# withShadowDOM isolates remote CSS

Ant Design CSS-in-JS from the remote and the shell fight when they share one document. The remote renders into an open shadow root with its own style cache.

## Where it lives

- `loyalty-transactions-frontend/src/HOC/withShadowDom.tsx`
- The same HOC exists in promotion, reward, dynamic-tiering, wallets, channels, and several other remotes.
- `@ant-design/cssinjs` `StyleProvider` gets `container={shadowRoot}` and a new `createCache()`.
- Popups need `ConfigProvider getPopupContainer` pointed inside the shadow root, or a Select dropdown renders on the light DOM and looks detached.

## Shape

```ts
const shadowRoot = host.attachShadow({ mode: "open" });
const root = ReactDOM.createRoot(shadowRoot);
<StyleProvider cache={createCache()} container={shadowRoot}>
  <ConfigProvider getPopupContainer={() => popupHost}>{children}</ConfigProvider>
</StyleProvider>
```

## What breaks if you skip it

Buttons from the remote use the shell theme, or the dropdown paints at the top of the light page. Sharing the shell's style cache writes remote styles into the host.
