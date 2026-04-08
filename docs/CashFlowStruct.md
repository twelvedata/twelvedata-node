# CashFlowStruct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiscalDate** | **string** | Date of the cash flow release | [optional] [default to undefined]
**quarter** | **string** | Fiscal quarter. Visible when &#x60;&amp;period&#x3D;quarterly&#x60; | [optional] [default to undefined]
**year** | **number** | Fiscal year | [optional] [default to undefined]
**operatingActivities** | [**CashFlowStructOperatingActivities**](CashFlowStructOperatingActivities.md) |  | [optional] [default to undefined]
**investingActivities** | [**CashFlowStructInvestingActivities**](CashFlowStructInvestingActivities.md) |  | [optional] [default to undefined]
**financingActivities** | [**CashFlowStructFinancingActivities**](CashFlowStructFinancingActivities.md) |  | [optional] [default to undefined]
**endCashPosition** | **number** | Returns the amount of cash a company has when adding the change in cash and beginning cash balance for the current fiscal period | [optional] [default to undefined]
**incomeTaxPaid** | **number** | Refers to supplemental data about income tax paid | [optional] [default to undefined]
**interestPaid** | **number** | Refers to supplemental data about interest paid | [optional] [default to undefined]
**freeCashFlow** | **number** | Represents the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets | [optional] [default to undefined]

## Example

```typescript
import { CashFlowStruct } from '@twelvedata/twelvedata-node';

const instance: CashFlowStruct = {
    fiscalDate,
    quarter,
    year,
    operatingActivities,
    investingActivities,
    financingActivities,
    endCashPosition,
    incomeTaxPaid,
    interestPaid,
    freeCashFlow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
