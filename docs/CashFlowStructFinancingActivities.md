# CashFlowStructFinancingActivities

Financing activities section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**longTermDebtIssuance** | **number** | Refers to the issuance of any financial obligations that extend beyond a 12 months period | [optional] [default to undefined]
**longTermDebtPayments** | **number** | Refers to the payments of any financial obligations that extend beyond a 12 months period | [optional] [default to undefined]
**shortTermDebtIssuance** | **number** | Refers to the issuance of any financial obligations that are expected to be paid off within a year | [optional] [default to undefined]
**commonStockIssuance** | **number** | Represents a transaction whereby a company issues its own shares to the marketplace | [optional] [default to undefined]
**commonStockRepurchase** | **number** | Represents a transaction whereby a company buys back its own shares from the marketplace | [optional] [default to undefined]
**commonDividends** | **number** | Returns value of payment doled out by a company to its stockholders in the form of periodic distributions of cash | [optional] [default to undefined]
**otherFinancingCharges** | **number** | Represents other financing charges | [optional] [default to undefined]
**financingCashFlow** | **number** | Returns cash flow from financing activities (CFF), which shows the net flows of cash that are used to fund the company | [optional] [default to undefined]

## Example

```typescript
import { CashFlowStructFinancingActivities } from '@twelvedata/twelvedata-node';

const instance: CashFlowStructFinancingActivities = {
    longTermDebtIssuance,
    longTermDebtPayments,
    shortTermDebtIssuance,
    commonStockIssuance,
    commonStockRepurchase,
    commonDividends,
    otherFinancingCharges,
    financingCashFlow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
