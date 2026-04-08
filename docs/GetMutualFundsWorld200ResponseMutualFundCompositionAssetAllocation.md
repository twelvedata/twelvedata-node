# GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation

Asset allocation of the fund by different asset classes and their respective weights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash** | **number** | Percentage of overall portfolio composition in cash | [optional] [default to undefined]
**stocks** | **number** | Percentage of overall portfolio composition in stocks | [optional] [default to undefined]
**preferredStocks** | **number** | Percentage of overall portfolio composition in preferred stocks | [optional] [default to undefined]
**convertables** | **number** | Percentage of overall portfolio composition in convertable securities | [optional] [default to undefined]
**bonds** | **number** | Percentage of overall portfolio composition in bond | [optional] [default to undefined]
**others** | **number** | Percentage of overall portfolio composition in other forms of holding | [optional] [default to undefined]

## Example

```typescript
import { GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation } from '@twelvedata/twelvedata-node';

const instance: GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation = {
    cash,
    stocks,
    preferredStocks,
    convertables,
    bonds,
    others,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
