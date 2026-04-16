
# GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown

Breakdown of the fund’s bond holdings by maturity, duration, and credit quality

## Properties

Name | Type
------------ | -------------
`averageMaturity` | [GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity.md)
`creditQuality` | [Array&lt;GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner&gt;](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner.md)
`averageDuration` | [GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration.md)

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "averageMaturity": null,
  "creditQuality": null,
  "averageDuration": null,
} satisfies GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


