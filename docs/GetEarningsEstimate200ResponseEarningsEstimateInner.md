# GetEarningsEstimate200ResponseEarningsEstimateInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the earnings estimate | [optional] [default to undefined]
**period** | **string** | Period of estimation, can be &#x60;current_quarter&#x60;, &#x60;next_quarter&#x60;, &#x60;current_year&#x60;, or &#x60;next_year&#x60; | [optional] [default to undefined]
**numberOfAnalysts** | **number** | Number of analysts that made the estimation | [optional] [default to undefined]
**avgEstimate** | **number** | Average estimation across analysts | [optional] [default to undefined]
**lowEstimate** | **number** | Lowest estimation given by an analyst | [optional] [default to undefined]
**highEstimate** | **number** | Highest estimation given by an analyst | [optional] [default to undefined]
**yearAgoEps** | **number** | Average estimation of this period\&#39;s earnings given a year ago | [optional] [default to undefined]

## Example

```typescript
import { GetEarningsEstimate200ResponseEarningsEstimateInner } from '@twelvedata/twelvedata-node';

const instance: GetEarningsEstimate200ResponseEarningsEstimateInner = {
    date,
    period,
    numberOfAnalysts,
    avgEstimate,
    lowEstimate,
    highEstimate,
    yearAgoEps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
