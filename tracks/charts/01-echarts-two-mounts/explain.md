# echarts.init versus echarts-for-react

The same chart library is mounted two ways. Wallets owns the instance. The shells let echarts-for-react own it.

## Where it lives

- `wallets-frontend/src/pages/WalletsSearch/components/AnalyticsStatusCharts/AnalyticsStatusCharts.tsx` calls `echarts.init`, `setOption`, `ResizeObserver`, and `dispose`.
- Shells use `echarts-for-react` in `BarChartMonthlyRevenue`.
- Forgetting dispose leaks a canvas and a listener on every visit.

## Shape

```ts
const chart = echarts.init(chartRef.current);
chart.setOption(option);
const observer = new ResizeObserver(() => chart.resize());
return () => {
  observer.disconnect();
  chart.dispose();
};
```

## What breaks if you skip it

Charts stack on each navigation, or they stay the old size when the sidebar collapses. The React wrapper hides dispose. The manual mount does not.
