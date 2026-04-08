# GetTimeSeriesMacdSlope200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**macdSlope** | **string** | MACD slope value | [optional] [default to undefined]
**macdSignalSlope** | **string** | MACD signal slope value | [optional] [default to undefined]
**macdHistSlope** | **string** | MACD histogram slope value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMacdSlope200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMacdSlope200ResponseValuesInner = {
    datetime,
    macdSlope,
    macdSignalSlope,
    macdHistSlope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
