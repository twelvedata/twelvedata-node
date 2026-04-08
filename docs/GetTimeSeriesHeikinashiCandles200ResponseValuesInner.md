# GetTimeSeriesHeikinashiCandles200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**heikinhighs** | **string** | Heikin-Ashi highs value | [optional] [default to undefined]
**heikinopens** | **string** | Heikin-Ashi opens value | [optional] [default to undefined]
**heikincloses** | **string** | Heikin-Ashi closes value | [optional] [default to undefined]
**heikinlows** | **string** | Heikin-Ashi lows value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesHeikinashiCandles200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesHeikinashiCandles200ResponseValuesInner = {
    datetime,
    heikinhighs,
    heikinopens,
    heikincloses,
    heikinlows,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
