# GetTimeSeriesMama200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**seriesType** | **string** | Price type on which technical indicator is calculated | [optional] [default to undefined]
**fastLimit** | **number** | The limit for the fast moving average | [optional] [default to undefined]
**slowLimit** | **number** | The limit for the slow moving average | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesMama200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesMama200ResponseMetaIndicator = {
    name,
    seriesType,
    fastLimit,
    slowLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
