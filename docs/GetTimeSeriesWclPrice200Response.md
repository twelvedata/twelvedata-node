# GetTimeSeriesWclPrice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesWclPrice200ResponseMeta**](GetTimeSeriesWclPrice200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesWclPrice200ResponseValuesInner&gt;**](GetTimeSeriesWclPrice200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesWclPrice200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesWclPrice200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
