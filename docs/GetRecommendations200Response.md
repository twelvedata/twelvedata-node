# GetRecommendations200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetRecommendations200ResponseMeta**](GetRecommendations200ResponseMeta.md) |  | [optional] [default to undefined]
**trends** | [**GetRecommendations200ResponseTrends**](GetRecommendations200ResponseTrends.md) |  | [optional] [default to undefined]
**rating** | **number** | Rating from 0 to 10 represents overall analysts\&#39; recommendation. 0 to 2 - strong sell, 2 to 4 - sell, 4 to 6 - hold, 6 to 8 - buy, 8 to 10 - strong buy. | [optional] [default to undefined]
**status** | **string** | Response status | [optional] [default to undefined]

## Example

```typescript
import { GetRecommendations200Response } from '@twelvedata/twelvedata-node';

const instance: GetRecommendations200Response = {
    meta,
    trends,
    rating,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
