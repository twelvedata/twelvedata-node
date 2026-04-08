# GetAnalystRatingsUsEquities200ResponseRatingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date when the rating was released | [optional] [default to undefined]
**firm** | **string** | Firm that issued the ranking | [optional] [default to undefined]
**analystName** | **string** | Name of an analyst | [optional] [default to undefined]
**ratingChange** | **string** | Defines the action of the firm to ranking, could be &#x60;Maintains&#x60;, &#x60;Upgrade&#x60;, &#x60;Downgrade&#x60;, &#x60;Initiates&#x60;, &#x60;Reiterates&#x60;, &#x60;Assumes&#x60;, or &#x60;Reinstates&#x60; | [optional] [default to undefined]
**ratingCurrent** | **string** | Current firm\&#39;s ranking of the instrument | [optional] [default to undefined]
**ratingPrior** | **string** | Prior firm\&#39;s ranking of the instrument | [optional] [default to undefined]
**time** | **string** | Time when the rating was released or updated | [optional] [default to undefined]
**actionPriceTarget** | **string** | Action that firm took towards target price | [optional] [default to undefined]
**priceTargetCurrent** | **number** | Current firm\&#39;s price target for the instrument | [optional] [default to undefined]
**priceTargetPrior** | **number** | Prior firm\&#39;s price target for the instrument | [optional] [default to undefined]

## Example

```typescript
import { GetAnalystRatingsUsEquities200ResponseRatingsInner } from '@twelvedata/twelvedata-node';

const instance: GetAnalystRatingsUsEquities200ResponseRatingsInner = {
    date,
    firm,
    analystName,
    ratingChange,
    ratingCurrent,
    ratingPrior,
    time,
    actionPriceTarget,
    priceTargetCurrent,
    priceTargetPrior,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
