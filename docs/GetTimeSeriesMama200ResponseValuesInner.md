# GetTimeSeriesMama200ResponseValuesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened | [optional] [default to undefined]
**mama** | **string** | MAMA value | [optional] [default to undefined]
**fama** | **string** | FAMA value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMama200ResponseValuesInner } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMama200ResponseValuesInner = {
    datetime,
    mama,
    fama,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
