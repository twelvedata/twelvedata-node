# GetTimeSeriesMacdSlope200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**fastPeriod** | **number** | The shorter time period for calculation | [optional] [default to undefined]
**slowPeriod** | **number** | The longer time period for calculation | [optional] [default to undefined]
**signalPeriod** | **number** | The time period used for generating the signal line | [optional] [default to undefined]
**timePeriod** | **number** | The time period used for calculation in the indicator | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMacdSlope200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMacdSlope200ResponseMetaIndicator = {
    name,
    seriesType,
    fastPeriod,
    slowPeriod,
    signalPeriod,
    timePeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
