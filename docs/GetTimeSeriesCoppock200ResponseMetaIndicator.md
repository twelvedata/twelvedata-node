# GetTimeSeriesCoppock200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**wmaPeriod** | **number** | Number of periods for weighted moving average | [optional] [default to undefined]
**longRocPeriod** | **number** | Number of periods for long term rate of change | [optional] [default to undefined]
**shortRocPeriod** | **number** | Number of periods for short term rate of change | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesCoppock200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesCoppock200ResponseMetaIndicator = {
    name,
    seriesType,
    wmaPeriod,
    longRocPeriod,
    shortRocPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
