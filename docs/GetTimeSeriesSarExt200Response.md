# GetTimeSeriesSarExt200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesSarExt200ResponseMeta**](GetTimeSeriesSarExt200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesSarExt200ResponseValuesInner&gt;**](GetTimeSeriesSarExt200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesSarExt200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesSarExt200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
