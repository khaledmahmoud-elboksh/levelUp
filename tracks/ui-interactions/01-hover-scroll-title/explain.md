# Scroll an overflowing title on hover

A lesson title stays on one line with an ellipsis. Hover it and the text slides far enough to reveal the end. Leave and it returns to its original ellipsized state.

## Where it lives

- `tracks/ui-interactions/01-hover-scroll-title/demo.html`
- This is a standalone browser lab inspired by the interaction you described on master.dev, not a traced or verified copy of that site's implementation.
- No product repo or additional package is needed.

## Shape

```css
.lesson-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lesson-title span {
  display: inline-block;
}
```

The outer element constrains and clips the title. The inner span keeps its full text width and is the element that moves. In a flex or grid layout, the title's containing item may also need `min-width: 0` to allow shrinking.

```js
const overflow = text.scrollWidth - title.clientWidth;
```

Only animate when `overflow > 0`. Move from `translateX(0)` to `translateX(-overflow)` with the Web Animations API. The demo uses a 300 ms pause, then roughly 40 pixels per second with a 600 ms minimum duration. It runs once and holds the final position, rather than looping.

During animation, switch the outer element from `text-overflow: ellipsis` to `clip`. On leave, `animation.cancel()` removes the transform and removing the class restores the ellipsis immediately.

## Access without a mouse

The demo uses ordinary links. Keyboard focus starts the same reveal; blur restores it. If a title is both hovered and focused, it resets only when both states have ended.

With reduced motion enabled, hover or focus wraps the full title instead of animating. On a device without hover, titles wrap by default. The text stays intact in the DOM for screen readers; CSS ellipsis does not shorten its accessible name.

The demo is for left-to-right titles. Right-to-left scrolling needs direction-aware translation and a separate lab.

## What breaks if you skip it

- A fixed translation can hide the end or scroll a short title unnecessarily.
- Measuring the clipped outer width as the full text width gives the wrong distance.
- Forgetting to cancel leaves the title shifted after hover.
- Animating only on hover excludes keyboard users.
- Disabling animation without another reveal method leaves reduced-motion users with truncated text.
- Reusing an old measurement after resizing can scroll too far. ResizeObserver remeasures the active title in this demo.
