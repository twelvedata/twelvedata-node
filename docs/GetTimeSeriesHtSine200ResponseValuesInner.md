# GetTimeSeriesHtSine200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**htSine** | **string** | ht_sine value | [optional] [default to undefined]
**htLeadsine** | **string** | ht_leadsine value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesHtSine200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesHtSine200ResponseValuesInner = {
    datetime,
    htSine,
    htLeadsine,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
