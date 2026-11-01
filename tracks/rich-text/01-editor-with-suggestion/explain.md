# EditorWithSuggestion inserts mentions on {{

SMS and campaign text are not HTML. They are a TipTap document whose mention nodes render as {{variableName}}, with a popup when the author types {{.

## Where it lives

- `reward-campaign-frontend/src/components/EditorWithSuggestion/EditorWithSuggestion.tsx`
- `reward-campaign-frontend/src/components/EditorWithSuggestion/suggestion.ts` builds the tippy popup.
- The same pair exists in promotion-engine and pointing-system-settings.
- dynamic-tiering has a simpler `TiptapEditor`. The shells have `Editor.tsx` and `DescriptionEditor.tsx`.

## Shape

```ts
Mention.configure({
  renderText: ({ node }) => `{{${node.attrs.id.variableName}}}`,
  suggestion: {
    ...suggestionOptions,
    char: "{{",
    items: ({ query }) => getVariables().filter((v) => v.variableName.toLowerCase().includes(query.toLowerCase())).slice(0, 10),
  },
})
```

## What breaks if you skip it

The API receives HTML instead of {{name}} tokens. Or the popup uses the wrong trigger character and never opens. Or tippy is not destroyed on exit and popups stack.
