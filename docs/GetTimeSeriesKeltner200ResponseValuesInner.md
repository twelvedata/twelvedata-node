# GetTimeSeriesKeltner200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**upperLine** | **string** | Upper line value | [optional] [default to undefined]
**middleLine** | **string** | Middle line value | [optional] [default to undefined]
**lowerLine** | **string** | Lower line value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesKeltner200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesKeltner200ResponseValuesInner = {
    datetime,
    upperLine,
    middleLine,
    lowerLine,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
