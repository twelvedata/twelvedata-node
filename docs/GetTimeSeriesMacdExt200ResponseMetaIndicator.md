# GetTimeSeriesMacdExt200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**fastPeriod** | **number** | The shorter time period for calculation | [optional] [default to undefined]
**fastMaType** | **string** | The type of fast moving average used in the calculation | [optional] [default to undefined]
**slowPeriod** | **number** | The longer time period for calculation | [optional] [default to undefined]
**slowMaType** | **string** | The type of slow moving average used in the calculation | [optional] [default to undefined]
**signalPeriod** | **number** | The time period used for generating the signal line | [optional] [default to undefined]
**signalMaType** | **string** | The type of moving average used for generating the signal line | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMacdExt200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMacdExt200ResponseMetaIndicator = {
    name,
    seriesType,
    fastPeriod,
    fastMaType,
    slowPeriod,
    slowMaType,
    signalPeriod,
    signalMaType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
