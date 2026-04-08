# GetTimeSeriesHtPhasor200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**inPhase** | **string** | In_phase value | [optional] [default to undefined]
**quadrature** | **string** | Quadrature value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesHtPhasor200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesHtPhasor200ResponseValuesInner = {
    datetime,
    inPhase,
    quadrature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
