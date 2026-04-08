# GetTimeSeriesWclPrice200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**wclprice** | **number** | wclprice value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesWclPrice200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesWclPrice200ResponseValuesInner = {
    datetime,
    wclprice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
