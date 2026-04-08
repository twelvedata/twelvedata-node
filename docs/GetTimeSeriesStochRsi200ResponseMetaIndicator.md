# GetTimeSeriesStochRsi200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**rsiLength** | **number** | Length of period for calculating the RSI component | [optional] [default to undefined]
**stochLength** | **number** | Period length for computing the stochastic oscillator of the RSI | [optional] [default to undefined]
**kPeriod** | **number** | Period for smoothing the %K line | [optional] [default to undefined]
**dPeriod** | **number** | Period for smoothing the %D line, which is a moving average of %K | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesStochRsi200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesStochRsi200ResponseMetaIndicator = {
    name,
    seriesType,
    rsiLength,
    stochLength,
    kPeriod,
    dPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
