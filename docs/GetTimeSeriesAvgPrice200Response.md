# GetTimeSeriesAvgPrice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesAvgPrice200ResponseMeta**](GetTimeSeriesAvgPrice200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesAvgPrice200ResponseValuesInner&gt;**](GetTimeSeriesAvgPrice200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesAvgPrice200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesAvgPrice200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
