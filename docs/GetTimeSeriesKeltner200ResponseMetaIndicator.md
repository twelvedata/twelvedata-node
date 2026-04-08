# GetTimeSeriesKeltner200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**timePeriod** | **number** | Number of periods to average over | [optional] [default to undefined]
**atrTimePeriod** | **number** | The time period used for calculating the Average True Range | [optional] [default to undefined]
**multiplier** | **number** | The factor used to adjust the indicator\&#39;s sensitivity | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**maType** | **string** | The type of moving average used | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesKeltner200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesKeltner200ResponseMetaIndicator = {
    name,
    timePeriod,
    atrTimePeriod,
    multiplier,
    seriesType,
    maType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
