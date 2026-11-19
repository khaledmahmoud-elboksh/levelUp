# Hands-on: Scroll an overflowing title on hover

Open `demo.html` in your browser. No install or server is needed.

Trace this file:

`tracks/ui-interactions/01-hover-scroll-title/demo.html`

1. Hover the long title. Wait until its final words are visible, then move away. Confirm the ellipsis returns immediately.
2. Hover the short title. Confirm it does not move.
3. Use Tab to focus the long link. Move the mouse away while keeping focus: the title should stay revealed. Tab away to reset.
4. Change the width from `18rem` to `12rem`. Hover again and confirm the end still lines up with the available space.
5. Temporarily remove `animation?.cancel()` from `reset()`. Hover and leave. Describe the broken state, then restore the line.
6. Change `40` to `80` in the duration formula. Explain why the scroll gets faster rather than slower.
7. Enable reduced motion in your OS or browser developer tools. Hover or focus the title: it should wrap without animation.
8. Try touch-device emulation with hover disabled. Confirm both titles wrap and stay readable without hover.
9. Resize the viewport while the long title is active. Confirm the distance is recalculated.

This lab is a local build-and-inspect exercise. Do not change a product repo. Write your explanation of the outer clip, inner span, measurement, and reset in a scratch note, then take the quiz.
