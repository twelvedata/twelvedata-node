# GetTimeSeriesDx200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesDx200ResponseMeta**](GetTimeSeriesDx200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesDx200ResponseValuesInner&gt;**](GetTimeSeriesDx200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesDx200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesDx200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
