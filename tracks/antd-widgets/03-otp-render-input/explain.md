# OTP swaps in an antd Input

react-otp-input draws its own inputs. The login screen needs those cells to look like the rest of the antd form.

## Where it lives

- `ops-center/src/pages/Modules/AuthenticationModule/OTP/OTP.tsx`
- Standalone and channels have the same screen.
- The library is `react-otp-input`. The cell is antd `Input` via `renderInput`.

## Shape

```ts
<OtpInput
  numInputs={6}
  inputType="number"
  renderInput={(inputProps) => <Input {...inputProps} className="otp-input" />}
/>
```

## What breaks if you skip it

The cells are unstyled native inputs, or spreading inputProps after className drops the library's ref and the focus chain breaks.
