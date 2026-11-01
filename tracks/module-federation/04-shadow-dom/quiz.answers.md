# Answers: withShadowDOM isolates remote CSS

1. The shell cache inserts styles into the light document. The remote cache must insert into the shadow root.

2. antd portals dropdowns to document.body by default, outside the shadow tree, where the remote CSS does not apply.

3. open
