# TechnicalIndicatorsResponseMacdParameter

Input parameter name. Example values: <code>series_type</code>, <code>fast_period</code>, <code>slow_period</code>, <code>time_period</code>, <code>signal_period</code>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_default** | **number** | Specifies parameter value set by default | [optional] [default to undefined]
**maxRange** | **number** | If the parameter has upper bound in order to ensure correct calculation | [optional] [default to undefined]
**minRange** | **number** | If the parameter has lower bound in order to ensure correct calculation | [optional] [default to undefined]
**range** | **Array&lt;string&gt;** | An array of available parameter values | [optional] [default to undefined]
**type** | **string** | Type of parameter might be &lt;code&gt;string&lt;/code&gt;, &lt;code&gt;int&lt;/code&gt;, &lt;code&gt;float&lt;/code&gt; or &lt;code&gt;array&lt;/code&gt; | [optional] [default to undefined]

## Example

```typescript
import { TechnicalIndicatorsResponseMacdParameter } from '@twelvedata/twelvedata-node';

const instance: TechnicalIndicatorsResponseMacdParameter = {
    _default,
    maxRange,
    minRange,
    range,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
