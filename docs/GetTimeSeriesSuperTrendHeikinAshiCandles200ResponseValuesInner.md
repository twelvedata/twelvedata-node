# GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**supertrend** | **string** | SuperTrend value | [optional] [default to undefined]
**heikinhighs** | **string** | Heikin-Ashi high values | [optional] [default to undefined]
**heikinopens** | **string** | Heikin-Ashi open values | [optional] [default to undefined]
**heikincloses** | **string** | Heikin-Ashi close values | [optional] [default to undefined]
**heikinlows** | **string** | Heikin-Ashi low values | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseValuesInner = {
    datetime,
    supertrend,
    heikinhighs,
    heikinopens,
    heikincloses,
    heikinlows,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
