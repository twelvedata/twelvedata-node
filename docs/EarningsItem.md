# EarningsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of earning release | [optional] [default to undefined]
**time** | **string** | Time of earning release, can be either of the following values: &#x60;Pre Market&#x60;, &#x60;After Hours&#x60;, &#x60;Time Not Supplied&#x60; | [optional] [default to undefined]
**epsEstimate** | **number** | Analyst estimate of the future company earning | [optional] [default to undefined]
**epsActual** | **number** | Actual value of reported earning | [optional] [default to undefined]
**difference** | **number** | Delta between &#x60;eps_actual&#x60; and &#x60;eps_estimate&#x60; | [optional] [default to undefined]
**surprisePrc** | **number** | Surprise in the percentage of the &#x60;eps_actual&#x60; related to &#x60;eps_estimate&#x60; | [optional] [default to undefined]

## Example

```typescript
import { EarningsItem } from '@twelvedata/twelvedata-node';

const instance: EarningsItem = {
    date,
    time,
    epsEstimate,
    epsActual,
    difference,
    surprisePrc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
