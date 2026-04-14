
# GetETFsWorld200ResponseEtfCompositionBondBreakdown

Breakdown of the fund’s portfolio by bond holding characteristics

## Properties

Name | Type
------------ | -------------
`averageMaturity` | [GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity](GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity.md)
`averageDuration` | [GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration](GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration.md)
`creditQuality` | [Array&lt;GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner&gt;](GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner.md)

## Example

```typescript
import type { GetETFsWorld200ResponseEtfCompositionBondBreakdown } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "averageMaturity": null,
  "averageDuration": null,
  "creditQuality": null,
} satisfies GetETFsWorld200ResponseEtfCompositionBondBreakdown

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetETFsWorld200ResponseEtfCompositionBondBreakdown
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


