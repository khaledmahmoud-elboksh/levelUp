# Answers: ToastProvider owns the antd message instance

1. The messageApi from message.useMessage(), stored in context.

2. antd 5.9 message has no live region. API toasts are responses the user is waiting on, so the region is assertive.

3. It throws "useToast must be used within ToastProvider".
