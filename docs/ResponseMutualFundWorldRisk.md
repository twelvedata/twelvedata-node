
# ResponseMutualFundWorldRisk

Risk and volatility statistics of the fund and its category over different periods

## Properties

Name | Type
------------ | -------------
`volatilityMeasures` | [Array&lt;GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner&gt;](GetMutualFundsWorld200ResponseMutualFundRiskVolatilityMeasuresInner.md)
`valuationMetrics` | [GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics](GetMutualFundsWorld200ResponseMutualFundRiskValuationMetrics.md)

## Example

```typescript
import type { ResponseMutualFundWorldRisk } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "volatilityMeasures": null,
  "valuationMetrics": null,
} satisfies ResponseMutualFundWorldRisk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseMutualFundWorldRisk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


