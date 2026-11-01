# Form rules render ErrorAlert

Validation copy is a small alert component, not a plain string, so every field looks the same.

## Where it lives

- `sku-frontend/src/pages/SkuMutation/SkuMutation.tsx` puts `<ErrorAlert />` in Form.Item `rules`.
- Shells and promotion wizards do the same.
- Promotion and reward use Ant Design 6. The other frontends use Ant Design 5. Check the repo package.json before copying a Form API.

## Shape

```ts
<Form.Item<FieldsType>
  name="name"
  rules={[
    { required: true, message: <ErrorAlert message="Name is required" /> },
    { max: 100, message: <ErrorAlert message="100 characters max" /> },
  ]}
/>
```

## What breaks if you skip it

One screen uses a red string and the next uses the alert. Or an antd 6 rule is pasted into an antd 5 form and the message node never mounts.
