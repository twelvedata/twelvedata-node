# GetTimeSeriesPpo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesPpo200ResponseMeta**](GetTimeSeriesPpo200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesPpo200ResponseValuesInner&gt;**](GetTimeSeriesPpo200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesPpo200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesPpo200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
