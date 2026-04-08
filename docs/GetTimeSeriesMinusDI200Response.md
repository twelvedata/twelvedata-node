# GetTimeSeriesMinusDI200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesMinusDI200ResponseMeta**](GetTimeSeriesMinusDI200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesMinusDI200ResponseValuesInner&gt;**](GetTimeSeriesMinusDI200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMinusDI200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMinusDI200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
