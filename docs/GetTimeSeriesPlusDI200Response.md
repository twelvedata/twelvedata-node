# GetTimeSeriesPlusDI200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesPlusDI200ResponseMeta**](GetTimeSeriesPlusDI200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesPlusDI200ResponseValuesInner&gt;**](GetTimeSeriesPlusDI200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesPlusDI200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesPlusDI200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
