
# IncomeStatementItemOperatingIncome

Operating income information

## Properties

Name | Type
------------ | -------------
`operatingIncomeValue` | number
`totalOperatingIncomeAsReported` | number
`operatingExpense` | number
`otherOperatingExpenses` | number
`totalExpenses` | number

## Example

```typescript
import type { IncomeStatementItemOperatingIncome } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "operatingIncomeValue": null,
  "totalOperatingIncomeAsReported": null,
  "operatingExpense": null,
  "otherOperatingExpenses": null,
  "totalExpenses": null,
} satisfies IncomeStatementItemOperatingIncome

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemOperatingIncome
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


