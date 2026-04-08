# GetTimeSeriesStochF200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**fastKPeriod** | **number** | The fast_k period used for calculation in the indicator | [optional] [default to undefined]
**fastDPeriod** | **number** | The fast_d period used for calculation in the indicator | [optional] [default to undefined]
**fastDmaType** | **string** | The type of fast Displaced Moving Average used | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesStochF200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesStochF200ResponseMetaIndicator = {
    name,
    fastKPeriod,
    fastDPeriod,
    fastDmaType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
