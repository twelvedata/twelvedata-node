# GetEpsTrend200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetEarningsEstimate200ResponseMeta**](GetEarningsEstimate200ResponseMeta.md) |  | [optional] [default to undefined]
**epsTrend** | [**Array&lt;GetEpsTrend200ResponseEpsTrendInner&gt;**](GetEpsTrend200ResponseEpsTrendInner.md) | EPS trend data | [optional] [default to undefined]
**status** | **string** | Status of the response | [optional] [default to undefined]

## Example

```typescript
import { GetEpsTrend200Response } from '@twelvedata/twelvedata-node';

const instance: GetEpsTrend200Response = {
    meta,
    epsTrend,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
