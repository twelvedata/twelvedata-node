# GetEpsTrend200ResponseEpsTrendInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the estimation | [optional] [default to undefined]
**period** | **string** | Period of estimation, can be &#x60;current_quarter&#x60;, &#x60;next_quarter&#x60;, &#x60;current_year&#x60;, or &#x60;next_year&#x60; | [optional] [default to undefined]
**currentEstimate** | **number** | Actual EPS estimation for the period | [optional] [default to undefined]
**_7daysAgo** | **number** | EPS estimation value 7 days ago | [optional] [default to undefined]
**_30daysAgo** | **number** | EPS estimation value 30 days ago | [optional] [default to undefined]
**_60daysAgo** | **number** | EPS estimation value 60 days ago | [optional] [default to undefined]
**_90daysAgo** | **number** | EPS estimation value 90 days ago | [optional] [default to undefined]

## Example

```typescript
import { GetEpsTrend200ResponseEpsTrendInner } from '@twelvedata/twelvedata-node';

const instance: GetEpsTrend200ResponseEpsTrendInner = {
    date,
    period,
    currentEstimate,
    _7daysAgo,
    _30daysAgo,
    _60daysAgo,
    _90daysAgo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
