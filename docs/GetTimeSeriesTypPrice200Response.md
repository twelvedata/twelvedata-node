# GetTimeSeriesTypPrice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesTypPrice200ResponseMeta**](GetTimeSeriesTypPrice200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesTypPrice200ResponseValuesInner&gt;**](GetTimeSeriesTypPrice200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesTypPrice200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesTypPrice200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
