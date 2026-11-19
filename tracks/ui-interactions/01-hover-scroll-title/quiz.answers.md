# Answers: Scroll an overflowing title on hover

1. `overflow: hidden`, `white-space: nowrap`, and `text-overflow: ellipsis`, on an element whose available width is constrained.

2. The difference is the actual hidden distance. It varies with the text, font, and container width. A non-positive difference means no animation is needed.

3. The outer link must remain the stationary clipping window and interaction target. The inner span contains the full-width text that slides behind it.

4. Cancel the animation to remove its transform, then remove `is-scrolling` to restore `text-overflow: ellipsis`. In the demo, this happens when neither hover nor focus remains.

5. Short titles do not animate. Keyboard focus reveals long titles too. Reduced-motion users get wrapping on hover or focus; no-hover devices get wrapping by default.

6. The hidden distance may have changed. An old translation could overshoot or fail to reveal the end. ResizeObserver resets and remeasures the active title.
