
# IncomeStatementItemGrossProfitCostOfRevenue

Cost of revenue information

## Properties

Name | Type
------------ | -------------
`costOfRevenueValue` | number
`exciseTaxes` | number
`reconciledCostOfRevenue` | number

## Example

```typescript
import type { IncomeStatementItemGrossProfitCostOfRevenue } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "costOfRevenueValue": null,
  "exciseTaxes": null,
  "reconciledCostOfRevenue": null,
} satisfies IncomeStatementItemGrossProfitCostOfRevenue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemGrossProfitCostOfRevenue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


