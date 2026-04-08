# GetAnalystRatingsLight200ResponseRatingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date when the rating was released | [optional] [default to undefined]
**firm** | **string** | Firm that issued the ranking | [optional] [default to undefined]
**ratingChange** | **string** | Defines the action of the firm to ranking, could be &#x60;Maintains&#x60;, &#x60;Upgrade&#x60;, &#x60;Downgrade&#x60;, &#x60;Initiates&#x60; or &#x60;Reiterates&#x60; | [optional] [default to undefined]
**ratingCurrent** | **string** | Current firm\&#39;s ranking of the instrument | [optional] [default to undefined]
**ratingPrior** | **string** | Prior firm\&#39;s ranking of the instrument | [optional] [default to undefined]

## Example

```typescript
import { GetAnalystRatingsLight200ResponseRatingsInner } from '@twelvedata/twelvedata-node';

const instance: GetAnalystRatingsLight200ResponseRatingsInner = {
    date,
    firm,
    ratingChange,
    ratingCurrent,
    ratingPrior,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
