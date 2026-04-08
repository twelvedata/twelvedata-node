# GetTimeSeriesIchimoku200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesIchimoku200ResponseMeta**](GetTimeSeriesIchimoku200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesIchimoku200ResponseValuesInner&gt;**](GetTimeSeriesIchimoku200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesIchimoku200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesIchimoku200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
