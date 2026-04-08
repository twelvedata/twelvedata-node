# GetTimeSeriesStoch200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**slowK** | **string** | slow_k value | [optional] [default to undefined]
**slowD** | **string** | slow_d value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesStoch200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesStoch200ResponseValuesInner = {
    datetime,
    slowK,
    slowD,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
