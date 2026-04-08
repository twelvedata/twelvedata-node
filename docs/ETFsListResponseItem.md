# ETFsListResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Instrument symbol (ticker) | [optional] [default to undefined]
**name** | **string** | Full name of the fund | [optional] [default to undefined]
**country** | **string** | Country of fund incorporation | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**fundFamily** | **string** | Investment company that manages the fund | [optional] [default to undefined]
**fundType** | **string** | Type of fund | [optional] [default to undefined]

## Example

```typescript
import { ETFsListResponseItem } from '@twelvedata/twelvedata-node';

const instance: ETFsListResponseItem = {
    symbol,
    name,
    country,
    micCode,
    fundFamily,
    fundType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
