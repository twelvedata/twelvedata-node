# AssetsInfo

AssetsInfo represents assets information in the balance sheet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAssets** | **number** | Total assets | [optional] [default to undefined]
**currentAssets** | [**AssetsInfoCurrentAssets**](AssetsInfoCurrentAssets.md) |  | [optional] [default to undefined]
**nonCurrentAssets** | [**AssetsInfoNonCurrentAssets**](AssetsInfoNonCurrentAssets.md) |  | [optional] [default to undefined]
**liabilities** | [**AssetsInfoLiabilities**](AssetsInfoLiabilities.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AssetsInfo } from '@twelvedata/twelvedata-node';

const instance: AssetsInfo = {
    totalAssets,
    currentAssets,
    nonCurrentAssets,
    liabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
