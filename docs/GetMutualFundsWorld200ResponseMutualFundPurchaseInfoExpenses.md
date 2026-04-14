
# GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses

Costs associated with investing in the mutual fund, including gross and net expense ratios

## Properties

Name | Type
------------ | -------------
`expenseRatioGross` | number
`expenseRatioNet` | number

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "expenseRatioGross": null,
  "expenseRatioNet": null,
} satisfies GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


