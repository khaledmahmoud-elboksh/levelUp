# Answers: Count CSV rows with SheetJS

1. XLSX.utils.decode_range

2. The FileReader uses readAsArrayBuffer, while XLSX.read is called with type binary. Those modes expect different input.

3. It is the zero-based last row index. The comment says rows are zero-indexed and that you would add 1 for a count. The resolve returns range.e.r as written.
