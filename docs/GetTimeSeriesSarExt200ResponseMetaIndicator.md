# GetTimeSeriesSarExt200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**startValue** | **number** | The initial value for the indicator calculation | [optional] [default to undefined]
**offsetOnReverse** | **number** | The adjustment applied when the indicator\&#39;s direction changes | [optional] [default to undefined]
**accelerationLimitLong** | **number** | The maximum acceleration value for long positions | [optional] [default to undefined]
**accelerationLong** | **number** | The acceleration value for long positions | [optional] [default to undefined]
**accelerationMaxLong** | **number** | The highest allowed acceleration for long positions | [optional] [default to undefined]
**accelerationLimitShort** | **number** | The maximum acceleration value for short positions | [optional] [default to undefined]
**accelerationShort** | **number** | The acceleration value for short positions | [optional] [default to undefined]
**accelerationMaxShort** | **number** | The highest allowed acceleration for short positions | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesSarExt200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesSarExt200ResponseMetaIndicator = {
    name,
    startValue,
    offsetOnReverse,
    accelerationLimitLong,
    accelerationLong,
    accelerationMaxLong,
    accelerationLimitShort,
    accelerationShort,
    accelerationMaxShort,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
