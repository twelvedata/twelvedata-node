# GetTimeSeriesIchimoku200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**tenkanSen** | **string** | Tenkan-sen value | [optional] [default to undefined]
**kijunSen** | **string** | Kijun-sen value | [optional] [default to undefined]
**senkouSpanA** | **string** | Senkou span A value | [optional] [default to undefined]
**senkouSpanB** | **string** | Senkou span B value | [optional] [default to undefined]
**chikouSpan** | **string** | Chikou span value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesIchimoku200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesIchimoku200ResponseValuesInner = {
    datetime,
    tenkanSen,
    kijunSen,
    senkouSpanA,
    senkouSpanB,
    chikouSpan,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
