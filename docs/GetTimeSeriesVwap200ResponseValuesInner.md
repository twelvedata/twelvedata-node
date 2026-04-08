# GetTimeSeriesVwap200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**vwapLower** | **number** | VWAP lower value | [optional] [default to undefined]
**vwap** | **number** | VWAP value | [optional] [default to undefined]
**vwapUpper** | **number** | VWAP upper value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesVwap200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesVwap200ResponseValuesInner = {
    datetime,
    vwapLower,
    vwap,
    vwapUpper,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
