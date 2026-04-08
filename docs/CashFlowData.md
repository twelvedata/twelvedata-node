# CashFlowData

CashFlowData represents cash flow data for a specific fiscal date

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiscalDate** | **string** | Fiscal date | [optional] [default to undefined]
**year** | **number** | Year of the cash flow statement | [optional] [default to undefined]
**cashFlowFromOperatingActivities** | [**CashFlowDataCashFlowFromOperatingActivities**](CashFlowDataCashFlowFromOperatingActivities.md) |  | [optional] [default to undefined]
**cashFlowFromInvestingActivities** | [**CashFlowDataCashFlowFromInvestingActivities**](CashFlowDataCashFlowFromInvestingActivities.md) |  | [optional] [default to undefined]
**cashFlowFromFinancingActivities** | [**CashFlowDataCashFlowFromFinancingActivities**](CashFlowDataCashFlowFromFinancingActivities.md) |  | [optional] [default to undefined]
**supplementalData** | [**CashFlowDataSupplementalData**](CashFlowDataSupplementalData.md) |  | [optional] [default to undefined]
**foreignAndDomesticSales** | [**CashFlowDataForeignAndDomesticSales**](CashFlowDataForeignAndDomesticSales.md) |  | [optional] [default to undefined]
**cashPosition** | [**CashFlowDataCashPosition**](CashFlowDataCashPosition.md) |  | [optional] [default to undefined]
**directMethodCashFlow** | [**CashFlowDataDirectMethodCashFlow**](CashFlowDataDirectMethodCashFlow.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CashFlowData } from '@twelvedata/twelvedata-node';

const instance: CashFlowData = {
    fiscalDate,
    year,
    cashFlowFromOperatingActivities,
    cashFlowFromInvestingActivities,
    cashFlowFromFinancingActivities,
    supplementalData,
    foreignAndDomesticSales,
    cashPosition,
    directMethodCashFlow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
