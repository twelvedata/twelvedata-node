# GetTimeSeriesAroon200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**aroonDown** | **string** | Aroon down value | [optional] [default to undefined]
**aroonUp** | **string** | Aroon up value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesAroon200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesAroon200ResponseValuesInner = {
    datetime,
    aroonDown,
    aroonUp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
