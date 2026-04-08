# GetTimeSeriesMacdExt200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**macd** | **string** | MACD value | [optional] [default to undefined]
**macdSignal** | **string** | MACD signal line value | [optional] [default to undefined]
**macdHist** | **string** | MACD histogram value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMacdExt200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMacdExt200ResponseValuesInner = {
    datetime,
    macd,
    macdSignal,
    macdHist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
