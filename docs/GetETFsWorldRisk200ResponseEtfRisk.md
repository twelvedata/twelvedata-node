
# GetETFsWorldRisk200ResponseEtfRisk

Risk metrics of a etf

## Properties

Name | Type
------------ | -------------
`volatilityMeasures` | [Array&lt;GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner&gt;](GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner.md)
`valuationMetrics` | [GetETFsWorld200ResponseEtfRiskValuationMetrics](GetETFsWorld200ResponseEtfRiskValuationMetrics.md)

## Example

```typescript
import type { GetETFsWorldRisk200ResponseEtfRisk } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "volatilityMeasures": null,
  "valuationMetrics": null,
} satisfies GetETFsWorldRisk200ResponseEtfRisk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetETFsWorldRisk200ResponseEtfRisk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


