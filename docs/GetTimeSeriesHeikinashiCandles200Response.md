# GetTimeSeriesHeikinashiCandles200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesHeikinashiCandles200ResponseMeta**](GetTimeSeriesHeikinashiCandles200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesHeikinashiCandles200ResponseValuesInner&gt;**](GetTimeSeriesHeikinashiCandles200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesHeikinashiCandles200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesHeikinashiCandles200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
