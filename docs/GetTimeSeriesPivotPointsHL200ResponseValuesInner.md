# GetTimeSeriesPivotPointsHL200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**pivotPointH** | **number** | &#x60;1&#x60; if it is a high pivot point, otherwise &#x60;0&#x60; | [optional] [default to undefined]
**pivotPointL** | **number** | &#x60;1&#x60; if it is a low pivot point, otherwise &#x60;0&#x60; | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesPivotPointsHL200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesPivotPointsHL200ResponseValuesInner = {
    datetime,
    pivotPointH,
    pivotPointL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
