# GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol ticker of a holding instrument | [optional] [default to undefined]
**name** | **string** | Name of a holding instrument | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**weight** | **number** | Weight of a holding instrument in overall portfolio composition | [optional] [default to undefined]

## Example

```typescript
import { GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner } from '@twelvedata/twelvedata-node';

const instance: GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner = {
    symbol,
    name,
    exchange,
    micCode,
    weight,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
