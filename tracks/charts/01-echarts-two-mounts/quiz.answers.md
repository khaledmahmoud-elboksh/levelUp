# Answers: echarts.init versus echarts-for-react

1. A cleanup that disconnects the ResizeObserver and calls chart.dispose().

2. echarts-for-react

3. The chart canvas does not follow CSS size changes, including the sidebar collapse, unless you call resize.
