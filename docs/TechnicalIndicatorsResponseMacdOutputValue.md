# TechnicalIndicatorsResponseMacdOutputValue

Output parameter name. Example values: <code>ad</code>, <code>add</code>, <code>adxr</code>, <code>aroonosc</code>,  <code>macd</code>, <code>macd_signal</code>, <code>macd_hist</code>, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultColor** | **string** | Suggested color for displaying returns hex color code | [optional] [default to undefined]
**display** | **string** | How output value should be rendered | [optional] [default to undefined]
**minRange** | **number** | If output value has minimum bound | [optional] [default to undefined]
**maxRange** | **number** | If output value has maximum bound | [optional] [default to undefined]

## Example

```typescript
import { TechnicalIndicatorsResponseMacdOutputValue } from '@twelvedata/twelvedata-node';

const instance: TechnicalIndicatorsResponseMacdOutputValue = {
    defaultColor,
    display,
    minRange,
    maxRange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
