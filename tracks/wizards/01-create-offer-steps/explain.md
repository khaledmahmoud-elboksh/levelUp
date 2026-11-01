# A wizard keeps currentStep next to Steps

A create flow is one form with several visible steps. The step index and the field values have to move together, including values on steps that are not mounted.

## Where it lives

- `promotion-engine-frontend/src/pages/CreateOfferCampaign/CreateOfferCampaignSteps.tsx` holds `currentStep` and renders antd `Steps`.
- `Form.useWatch` reads fields such as `rewards` from the same form.
- Reward-campaign, dynamic-tiering, and both shells use Steps plus useWatch in their own wizards.

## Shape

```ts
const rewardLength = Form.useWatch("rewards", form);
const activeStep = visibleSteps[currentStep] ?? visibleSteps[0];

<Steps current={currentStep} />
```

## What breaks if you skip it

Next validates only the mounted step and drops the others. Or useWatch runs without the form instance and watches a different form.
