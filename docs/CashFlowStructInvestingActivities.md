# CashFlowStructInvestingActivities

Investing activities section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capitalExpenditures** | **number** | Capital expenditures (CapEx) are funds used by a company to acquire, upgrade, and maintain physical assets (PPE) | [optional] [default to undefined]
**netIntangibles** | **number** | Represents purchase of a not physical asset | [optional] [default to undefined]
**netAcquisitions** | **number** | Refers to net amount of business purchase and sale | [optional] [default to undefined]
**purchaseOfInvestments** | **number** | Represents how much money has been used in making investments, including purchases of physical assets, investments in securities | [optional] [default to undefined]
**saleOfInvestments** | **number** | Represents how much money has been generated from the sale of securities or assets | [optional] [default to undefined]
**otherInvestingActivity** | **number** | Represents other investing activity | [optional] [default to undefined]
**investingCashFlow** | **number** | Returns total amount of cash flow used in investments | [optional] [default to undefined]

## Example

```typescript
import { CashFlowStructInvestingActivities } from '@twelvedata/twelvedata-node';

const instance: CashFlowStructInvestingActivities = {
    capitalExpenditures,
    netIntangibles,
    netAcquisitions,
    purchaseOfInvestments,
    saleOfInvestments,
    otherInvestingActivity,
    investingCashFlow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
