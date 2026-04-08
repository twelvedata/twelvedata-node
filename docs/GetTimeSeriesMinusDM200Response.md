# GetTimeSeriesMinusDM200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesMinusDM200ResponseMeta**](GetTimeSeriesMinusDM200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesMinusDM200ResponseValuesInner&gt;**](GetTimeSeriesMinusDM200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMinusDM200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMinusDM200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
