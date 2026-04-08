# TechnicalIndicatorsResponseMacdTinting

An array of tinting values used for proper indicator coloring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **string** | How the tinting should be rendered | [optional] [default to undefined]
**color** | **string** | Hex color code for the tinting | [optional] [default to undefined]
**transparency** | **number** | Transparency level, float value from &lt;code&gt;0&lt;/code&gt; to &lt;code&gt;1&lt;/code&gt; | [optional] [default to undefined]
**lowerBound** | **object** | Lower bound of tinting, can be a number or a return parameter name | [optional] [default to undefined]
**upperBound** | **object** | Upper bound of tinting, can be a number or a return parameter name | [optional] [default to undefined]

## Example

```typescript
import { TechnicalIndicatorsResponseMacdTinting } from '@twelvedata/twelvedata-node';

const instance: TechnicalIndicatorsResponseMacdTinting = {
    display,
    color,
    transparency,
    lowerBound,
    upperBound,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
