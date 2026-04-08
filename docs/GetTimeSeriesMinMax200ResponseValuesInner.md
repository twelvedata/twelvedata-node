# GetTimeSeriesMinMax200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**min** | **string** | Min value | [optional] [default to undefined]
**max** | **string** | Max value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMinMax200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMinMax200ResponseValuesInner = {
    datetime,
    min,
    max,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
