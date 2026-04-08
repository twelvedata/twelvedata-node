# GetTimeSeriesMinIndex200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**minidx** | **string** | Index of lowest value over period | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMinIndex200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMinIndex200ResponseValuesInner = {
    datetime,
    minidx,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
