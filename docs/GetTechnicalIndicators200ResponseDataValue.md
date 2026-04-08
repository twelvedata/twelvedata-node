# GetTechnicalIndicators200ResponseDataValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **boolean** | If the indicator is tested, approved and is recommended for use returns &lt;code&gt;true&lt;/code&gt;, otherwise returns &lt;code&gt;false&lt;/code&gt; | [optional] [default to undefined]
**fullName** | **string** | Full indicator name | [optional] [default to undefined]
**description** | **string** | Brief description of the indicator | [optional] [default to undefined]
**type** | **string** | Group to which indicator belongs to | [optional] [default to undefined]
**overlay** | **boolean** | If indicator should be plotted over price bars returns &lt;code&gt;true&lt;/code&gt;, otherwise returns &lt;code&gt;false&lt;/code&gt; | [optional] [default to undefined]
**outputValues** | [**TechnicalIndicatorsResponseMacdOutputValues**](TechnicalIndicatorsResponseMacdOutputValues.md) |  | [optional] [default to undefined]
**parameters** | [**TechnicalIndicatorsResponseMacdParameters**](TechnicalIndicatorsResponseMacdParameters.md) |  | [optional] [default to undefined]
**tinting** | [**TechnicalIndicatorsResponseMacdTinting**](TechnicalIndicatorsResponseMacdTinting.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetTechnicalIndicators200ResponseDataValue } from '@twelvedata/twelvedata-node';

const instance: GetTechnicalIndicators200ResponseDataValue = {
    enable,
    fullName,
    description,
    type,
    overlay,
    outputValues,
    parameters,
    tinting,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
