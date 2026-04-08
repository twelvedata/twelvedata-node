# GetTimeSeriesMacdExt200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetTimeSeriesMacdExt200ResponseMeta**](GetTimeSeriesMacdExt200ResponseMeta.md) |  | [optional] [default to undefined]
**values** | [**Array&lt;GetTimeSeriesMacdExt200ResponseValuesInner&gt;**](GetTimeSeriesMacdExt200ResponseValuesInner.md) | Array of time series data points | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMacdExt200Response } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMacdExt200Response = {
    meta,
    values,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
