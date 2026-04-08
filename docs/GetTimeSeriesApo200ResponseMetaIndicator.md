# GetTimeSeriesApo200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**fastPeriod** | **number** | Number of periods for fast moving average | [optional] [default to undefined]
**slowPeriod** | **number** | Number of periods for slow moving average | [optional] [default to undefined]
**maType** | **string** | Type of moving average used | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesApo200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesApo200ResponseMetaIndicator = {
    name,
    seriesType,
    fastPeriod,
    slowPeriod,
    maType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
