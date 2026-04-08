# GetTimeSeriesT3ma200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**timePeriod** | **number** | The time period used for calculation in the indicator | [optional] [default to undefined]
**vFactor** | **number** | The factor used to adjust the indicator\&#39;s volatility | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesT3ma200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesT3ma200ResponseMetaIndicator = {
    name,
    seriesType,
    timePeriod,
    vFactor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
