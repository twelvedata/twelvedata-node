# GetRevenueEstimate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetEarningsEstimate200ResponseMeta**](GetEarningsEstimate200ResponseMeta.md) |  | [optional] [default to undefined]
**revenueEstimate** | [**Array&lt;GetRevenueEstimate200ResponseRevenueEstimateInner&gt;**](GetRevenueEstimate200ResponseRevenueEstimateInner.md) | Revenue estimate data | [optional] [default to undefined]
**status** | **string** | Status of the response | [optional] [default to undefined]

## Example

```typescript
import { GetRevenueEstimate200Response } from '@twelvedata/twelvedata-node';

const instance: GetRevenueEstimate200Response = {
    meta,
    revenueEstimate,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
