
# IncomeStatementItemGrossProfit

Gross profit information

## Properties

Name | Type
------------ | -------------
`grossProfitValue` | number
`costOfRevenue` | [IncomeStatementItemGrossProfitCostOfRevenue](IncomeStatementItemGrossProfitCostOfRevenue.md)

## Example

```typescript
import type { IncomeStatementItemGrossProfit } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "grossProfitValue": null,
  "costOfRevenue": null,
} satisfies IncomeStatementItemGrossProfit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemGrossProfit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


