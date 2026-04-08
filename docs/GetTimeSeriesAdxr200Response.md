# GetTimeSeriesAdxr200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesAdxr200ResponseMeta**](GetTimeSeriesAdxr200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesAdxr200ResponseValuesInner&gt;**](GetTimeSeriesAdxr200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesAdxr200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesAdxr200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
