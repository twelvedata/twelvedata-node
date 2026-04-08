# GetExchangeRate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Requested currency symbol | [optional] [default to undefined]
**rate** | **number** | Real-time exchange rate for the corresponding symbol | [optional] [default to undefined]
**timestamp** | **number** | Unix timestamp of the rate | [optional] [default to undefined]

## Example

```typescript
import { GetExchangeRate200Response } from '@twelvedata/twelvedata-node';

const instance: GetExchangeRate200Response = {
    symbol,
    rate,
    timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
