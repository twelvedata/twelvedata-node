
# IncomeStatementItemExpenses

Expenses information

## Properties

Name | Type
------------ | -------------
`totalExpenses` | number
`sellingGeneralAndAdministrationExpense` | number
`sellingAndMarketingExpense` | number
`generalAndAdministrativeExpense` | number
`otherGeneralAndAdministrativeExpense` | number
`depreciationAmortizationDepletionIncomeStatement` | number
`researchAndDevelopmentExpense` | number
`insuranceAndClaimsExpense` | number
`rentAndLandingFees` | number
`salariesAndWagesExpense` | number
`rentExpenseSupplemental` | number
`provisionForDoubtfulAccounts` | number

## Example

```typescript
import type { IncomeStatementItemExpenses } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalExpenses": null,
  "sellingGeneralAndAdministrationExpense": null,
  "sellingAndMarketingExpense": null,
  "generalAndAdministrativeExpense": null,
  "otherGeneralAndAdministrativeExpense": null,
  "depreciationAmortizationDepletionIncomeStatement": null,
  "researchAndDevelopmentExpense": null,
  "insuranceAndClaimsExpense": null,
  "rentAndLandingFees": null,
  "salariesAndWagesExpense": null,
  "rentExpenseSupplemental": null,
  "provisionForDoubtfulAccounts": null,
} satisfies IncomeStatementItemExpenses

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemExpenses
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


