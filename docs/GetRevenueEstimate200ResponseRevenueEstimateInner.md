# GetRevenueEstimate200ResponseRevenueEstimateInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the estimate | [optional] [default to undefined]
**period** | **string** | Period of estimation, can be &#x60;current_quarter&#x60;, &#x60;next_quarter&#x60;, &#x60;current_year&#x60;, or &#x60;next_year&#x60; | [optional] [default to undefined]
**numberOfAnalysts** | **number** | Number of analysts that made the estimation | [optional] [default to undefined]
**avgEstimate** | **number** | Average estimation across analysts | [optional] [default to undefined]
**lowEstimate** | **number** | Lowest estimation given by an analyst | [optional] [default to undefined]
**highEstimate** | **number** | Highest estimation given by an analyst | [optional] [default to undefined]
**yearAgoSales** | **number** | Total revenue received a year ago relative to period | [optional] [default to undefined]
**salesGrowth** | **number** | Estimated sales growth of the period in relation to year-ago sales in prc (%) | [optional] [default to undefined]

## Example

```typescript
import { GetRevenueEstimate200ResponseRevenueEstimateInner } from '@twelvedata/twelvedata-node';

const instance: GetRevenueEstimate200ResponseRevenueEstimateInner = {
    date,
    period,
    numberOfAnalysts,
    avgEstimate,
    lowEstimate,
    highEstimate,
    yearAgoSales,
    salesGrowth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
