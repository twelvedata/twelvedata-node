# GetTimeSeriesStoch200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**fastKPeriod** | **number** | The time period for the fast %K line in the Stochastic Oscillator | [optional] [default to undefined]
**slowKPeriod** | **number** | The time period for the slow %K line in the Stochastic Oscillator | [optional] [default to undefined]
**slowDPeriod** | **number** | The time period for the slow %D line in the Stochastic Oscillator | [optional] [default to undefined]
**slowKmaType** | **string** | The type of slow %K Moving Average used | [optional] [default to undefined]
**slowDmaType** | **string** | The type of slow Displaced Moving Average used | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesStoch200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesStoch200ResponseMetaIndicator = {
    name,
    fastKPeriod,
    slowKPeriod,
    slowDPeriod,
    slowKmaType,
    slowDmaType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
