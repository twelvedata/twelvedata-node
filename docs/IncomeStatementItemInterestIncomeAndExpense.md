
# IncomeStatementItemInterestIncomeAndExpense

Interest income and expense information

## Properties

Name | Type
------------ | -------------
`interestIncome` | number
`interestExpense` | number
`netInterestIncome` | number
`netNonOperatingInterestIncomeExpense` | number
`interestExpenseNonOperating` | number
`interestIncomeNonOperating` | number

## Example

```typescript
import type { IncomeStatementItemInterestIncomeAndExpense } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "interestIncome": null,
  "interestExpense": null,
  "netInterestIncome": null,
  "netNonOperatingInterestIncomeExpense": null,
  "interestExpenseNonOperating": null,
  "interestIncomeNonOperating": null,
} satisfies IncomeStatementItemInterestIncomeAndExpense

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemInterestIncomeAndExpense
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


