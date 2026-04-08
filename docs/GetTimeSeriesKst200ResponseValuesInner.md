# GetTimeSeriesKst200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**kst** | **string** | KST value | [optional] [default to undefined]
**kstSignal** | **string** | KST signal value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesKst200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesKst200ResponseValuesInner = {
    datetime,
    kst,
    kstSignal,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
