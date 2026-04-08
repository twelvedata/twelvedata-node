# GetEarningsCalendar200ResponseEarningsValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Instrument symbol (ticker) | [optional] [default to undefined]
**name** | **string** | Full name of instrument | [optional] [default to undefined]
**currency** | **string** | Currency in which instrument is traded by ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**country** | **string** | Country where exchange is located | [optional] [default to undefined]
**time** | **string** | Can be either of the following values: &#x60;Pre Market&#x60;, &#x60;After Hours&#x60;, &#x60;Time Not Supplied&#x60; | [optional] [default to undefined]
**epsEstimate** | **number** | Analyst estimate of the future company earning | [optional] [default to undefined]
**epsActual** | **number** | Actual value of reported earning | [optional] [default to undefined]
**difference** | **number** | Delta between &#x60;eps_actual&#x60; and &#x60;eps_estimate&#x60; | [optional] [default to undefined]
**surprisePrc** | **number** | Surprise in percentage of the &#x60;eps_actual&#x60; related to &#x60;eps_estimate&#x60; | [optional] [default to undefined]

## Example

```typescript
import { GetEarningsCalendar200ResponseEarningsValueInner } from '@twelvedata/twelvedata-node';

const instance: GetEarningsCalendar200ResponseEarningsValueInner = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    country,
    time,
    epsEstimate,
    epsActual,
    difference,
    surprisePrc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
