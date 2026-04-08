# GetBalanceSheet200ResponseBalanceSheetInnerAssets

Assets section of the balance sheet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentAssets** | [**GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets**](GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets.md) |  | [optional] [default to undefined]
**nonCurrentAssets** | [**GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets**](GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets.md) |  | [optional] [default to undefined]
**totalAssets** | **number** | The sum of total_current_assets + total_non_current_assets | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseBalanceSheetInnerAssets } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseBalanceSheetInnerAssets = {
    currentAssets,
    nonCurrentAssets,
    totalAssets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
