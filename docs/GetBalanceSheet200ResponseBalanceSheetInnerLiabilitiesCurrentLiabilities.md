# GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities

Current liabilities section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountsPayable** | **number** | Refers to an account within the general ledger that represents an obligation to pay off a short-term debt to creditors or suppliers | [optional] [default to undefined]
**accruedExpenses** | **number** | Represents payments that a company is obligated to pay in the future for which goods and services have already been delivered | [optional] [default to undefined]
**shortTermDebt** | **number** | Represents current debt and capital lease obligations | [optional] [default to undefined]
**deferredRevenue** | **number** | Represents advance payments a company receives for products or services that are to be delivered or performed in the future | [optional] [default to undefined]
**taxPayable** | **number** | Represents taxes due to the government within one year | [optional] [default to undefined]
**pensions** | **number** | Represents to pensions to be paid out | [optional] [default to undefined]
**otherCurrentLiabilities** | **number** | Represents other current liabilities | [optional] [default to undefined]
**totalCurrentLiabilities** | **number** | Represents total current liabilities | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities = {
    accountsPayable,
    accruedExpenses,
    shortTermDebt,
    deferredRevenue,
    taxPayable,
    pensions,
    otherCurrentLiabilities,
    totalCurrentLiabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
