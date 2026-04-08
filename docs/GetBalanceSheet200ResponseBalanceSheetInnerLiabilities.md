# GetBalanceSheet200ResponseBalanceSheetInnerLiabilities

Liabilities section of the balance sheet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentLiabilities** | [**GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities**](GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities.md) |  | [optional] [default to undefined]
**nonCurrentLiabilities** | [**GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities**](GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities.md) |  | [optional] [default to undefined]
**totalLiabilities** | **number** | The sum of total_current_liabilities + total_non_current_liabilities | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseBalanceSheetInnerLiabilities } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseBalanceSheetInnerLiabilities = {
    currentLiabilities,
    nonCurrentLiabilities,
    totalLiabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
