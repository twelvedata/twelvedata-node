# GetTimeSeriesBBands200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**timePeriod** | **number** | Number of periods to average over | [optional] [default to undefined]
**sd** | **number** | Number of standard deviations | [optional] [default to undefined]
**maType** | **string** | Moving average type | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesBBands200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesBBands200ResponseMetaIndicator = {
    name,
    seriesType,
    timePeriod,
    sd,
    maType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
