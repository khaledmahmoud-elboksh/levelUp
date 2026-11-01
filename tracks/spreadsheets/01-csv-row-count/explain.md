# Count CSV rows with SheetJS

Bulk actions needs a row count before upload. It uses SheetJS to read the sheet range instead of converting the whole sheet to JSON.

## Where it lives

- `bulk-actions-frontend/src/utility/index.ts` exports `getNumberOfRowsFromCSV`.
- The package is `xlsx`.
- `XLSX.utils.decode_range` reads `worksheet['!ref']`.

## Shape

```ts
const workbook = XLSX.read(data, { type: "binary" });
const range = XLSX.utils.decode_range(worksheet["!ref"]);
resolve(range.e.r);
```

## What breaks if you skip it

A large CSV is parsed into objects just to read length. Or the count is off by one because range.e.r is zero-based and includes the header, and the comment in the file says to add 1 while the code does not.
