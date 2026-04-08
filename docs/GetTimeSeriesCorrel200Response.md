# GetTimeSeriesCorrel200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesCorrel200ResponseMeta**](GetTimeSeriesCorrel200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesCorrel200ResponseValuesInner&gt;**](GetTimeSeriesCorrel200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesCorrel200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesCorrel200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
