# GetTimeSeriesCrsi200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**rsiPeriod** | **number** | Number of periods for RSI used to calculate price momentum | [optional] [default to undefined]
**upDownLength** | **number** | Number of periods for RSI used to calculate up/down trend | [optional] [default to undefined]
**percentRankPeriod** | **number** | Number of periods used to calculate PercentRank | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesCrsi200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesCrsi200ResponseMetaIndicator = {
    name,
    seriesType,
    rsiPeriod,
    upDownLength,
    percentRankPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
