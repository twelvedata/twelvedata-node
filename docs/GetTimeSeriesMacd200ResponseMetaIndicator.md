# GetTimeSeriesMacd200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**fastPeriod** | **number** | Fast period value | [optional] [default to undefined]
**slowPeriod** | **number** | Slow period value | [optional] [default to undefined]
**signalPeriod** | **number** | Signal period value | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMacd200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMacd200ResponseMetaIndicator = {
    name,
    seriesType,
    fastPeriod,
    slowPeriod,
    signalPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
