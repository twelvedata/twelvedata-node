# GetTimeSeriesObv200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesObv200ResponseMeta**](GetTimeSeriesObv200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesObv200ResponseValuesInner&gt;**](GetTimeSeriesObv200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesObv200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesObv200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
