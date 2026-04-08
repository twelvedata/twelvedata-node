# GetTimeSeriesMinusDM200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**minusDm** | **string** | Minus Directional Movement value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMinusDM200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMinusDM200ResponseValuesInner = {
    datetime,
    minusDm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
