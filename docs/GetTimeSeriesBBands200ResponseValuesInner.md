# GetTimeSeriesBBands200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**upperBand** | **string** | Upper band value | [optional] [default to undefined]
**middleBand** | **string** | Middle band value | [optional] [default to undefined]
**lowerBand** | **string** | Lower band value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesBBands200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesBBands200ResponseValuesInner = {
    datetime,
    upperBand,
    middleBand,
    lowerBand,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
