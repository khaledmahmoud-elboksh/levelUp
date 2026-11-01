# ConfigProvider and dayjs plugins

Ant Design reads theme and locale from ConfigProvider. Its date objects are dayjs, and plugins such as utc do nothing until you extend them.

## Where it lives

- Every frontend imports ConfigProvider. One local example is `ops-center/src/pages/Modules/SearchHandsetsModule/SearchHandsets.tsx`.
- `promotion-engine-frontend/src/models/Common/Filters.ts` calls `dayjs.extend(utc)`.
- `ops-center/src/components/PushMonitor/PushMonitorPopup.tsx` calls `dayjs.extend(relativeTime)`.

## Shape

```ts
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

<ConfigProvider theme={{ components: { Tabs: { titleFontSize: 12 } } }}>
```

## What breaks if you skip it

A filter compares local time to a UTC string and the range is off by hours. relativeTime displays the raw date because the plugin was never extended in that bundle.
