
# GetMutualFundsWorld200ResponseMutualFundPerformance

Detailed performance of a mutual fund

## Properties

Name | Type
------------ | -------------
`trailingReturns` | [Array&lt;GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner&gt;](GetMutualFundsWorld200ResponseMutualFundPerformanceTrailingReturnsInner.md)
`annualTotalReturns` | [Array&lt;GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner&gt;](GetMutualFundsWorld200ResponseMutualFundPerformanceAnnualTotalReturnsInner.md)
`quarterlyTotalReturns` | [Array&lt;GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner&gt;](GetMutualFundsWorld200ResponseMutualFundPerformanceQuarterlyTotalReturnsInner.md)
`loadAdjustedReturn` | [Array&lt;GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner&gt;](GetMutualFundsWorld200ResponseMutualFundPerformanceLoadAdjustedReturnInner.md)

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFundPerformance } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "trailingReturns": null,
  "annualTotalReturns": null,
  "quarterlyTotalReturns": null,
  "loadAdjustedReturn": null,
} satisfies GetMutualFundsWorld200ResponseMutualFundPerformance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFundPerformance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


