# GetTimeSeries200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeries200ResponseMeta**](GetTimeSeries200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;TimeSeriesItem&gt;**](TimeSeriesItem.md) | List of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeries200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeries200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
