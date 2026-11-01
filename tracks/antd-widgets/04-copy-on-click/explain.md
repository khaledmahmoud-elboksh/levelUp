# CopyOnClick stops the row click

A table row is a link or a button. A copy control inside it must copy and must not activate the row.

## Where it lives

- `ops-center/src/components/CopyOnClick/CopyOnClick.tsx`
- Standalone has the same component.
- Claims and loyalty call `react-copy-to-clipboard` inline in places that do not use the wrapper.

## Shape

```ts
<CopyToClipboard text={toBeCopied} onCopy={() => Toast.success("Copied to clipboard")}>
  <Tooltip title={toBeCopied}>
    <span onClick={(event) => event.stopPropagation()}>{label}</span>
  </Tooltip>
</CopyToClipboard>
```

## What breaks if you skip it

Copy navigates into the detail page. Or the toast never fires because useToast is outside ToastProvider.
