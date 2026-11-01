# TagSelect caps and hides selected options

antd Select multiple mode still shows selected rows and does not keep only the last N tags. TagSelect adds both on top of Select, and types the tag renderer with rc-select.

## Where it lives

- `reward-campaign-frontend/src/components/TagSelect/TagSelect.tsx`
- The same component exists in bulk-actions.
- The tag prop type is `CustomTagProps` from `rc-select/lib/BaseSelect`. Reward and promotion are the antd 6 repos. Check that import before copying it into an antd 5 repo.

## Shape

```ts
const next = maxCount ? newSelectedTag.slice(-maxCount) : newSelectedTag;
if (maxCount && newSelectedTag.length >= maxCount) ref.current?.blur();

tagRender: (props: CustomTagProps) => <Tag>{normalizedOptions[value]?.label}</Tag>
```

## What breaks if you skip it

Users stack dozens of tags. Selected options stay in the menu and get picked twice. The tag shows the raw id because the label lookup was skipped.
