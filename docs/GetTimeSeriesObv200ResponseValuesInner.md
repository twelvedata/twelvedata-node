# GetTimeSeriesObv200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**obv** | **string** | obv value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesObv200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesObv200ResponseValuesInner = {
    datetime,
    obv,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
