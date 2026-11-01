# ImageUploader crops, then stores base64

The form needs a string value, not an Upload file list. ImageUploader puts antd-img-crop around Upload and writes a data URL through onChange.

## Where it lives

- `reward-campaign-frontend/src/components/ImageUploader/ImageUploader.tsx`
- dynamic-tiering has the same component.
- Limits in the reward copy: 2MB, extensions jpg, jpeg, png, crop aspect 1.

## Shape

```ts
<ImgCrop aspect={1}>
  <Upload
    listType="picture-card"
    maxCount={1}
    fileList={value ? [{ uid: "-1", url: value }] : []}
  />
</ImgCrop>
```

## What breaks if you skip it

The form submits a File object the API does not accept. Or a 10MB image is stored as base64 and the request fails later with no toast.
