# GetBalanceSheet200ResponseBalanceSheetInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiscalDate** | **string** | Date of the balance sheet release | [optional] [default to undefined]
**year** | **number** | Fiscal year | [optional] [default to undefined]
**assets** | [**GetBalanceSheet200ResponseBalanceSheetInnerAssets**](GetBalanceSheet200ResponseBalanceSheetInnerAssets.md) |  | [optional] [default to undefined]
**liabilities** | [**GetBalanceSheet200ResponseBalanceSheetInnerLiabilities**](GetBalanceSheet200ResponseBalanceSheetInnerLiabilities.md) |  | [optional] [default to undefined]
**shareholdersEquity** | [**GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity**](GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseBalanceSheetInner } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseBalanceSheetInner = {
    fiscalDate,
    year,
    assets,
    liabilities,
    shareholdersEquity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
