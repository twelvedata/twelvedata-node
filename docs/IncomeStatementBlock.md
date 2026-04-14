
# IncomeStatementBlock


## Properties

Name | Type
------------ | -------------
`fiscalDate` | string
`quarter` | number
`year` | number
`sales` | number
`costOfGoods` | number
`grossProfit` | number
`operatingExpense` | [IncomeStatementBlockOperatingExpense](IncomeStatementBlockOperatingExpense.md)
`operatingIncome` | number
`nonOperatingInterest` | [IncomeStatementBlockNonOperatingInterest](IncomeStatementBlockNonOperatingInterest.md)
`otherIncomeExpense` | number
`pretaxIncome` | number
`incomeTax` | number
`netIncome` | number
`epsBasic` | number
`epsDiluted` | number
`basicSharesOutstanding` | number
`dilutedSharesOutstanding` | number
`ebit` | number
`ebitda` | number
`netIncomeContinuousOperations` | number
`minorityInterests` | number
`preferredStockDividends` | number

## Example

```typescript
import type { IncomeStatementBlock } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiscalDate": null,
  "quarter": null,
  "year": null,
  "sales": null,
  "costOfGoods": null,
  "grossProfit": null,
  "operatingExpense": null,
  "operatingIncome": null,
  "nonOperatingInterest": null,
  "otherIncomeExpense": null,
  "pretaxIncome": null,
  "incomeTax": null,
  "netIncome": null,
  "epsBasic": null,
  "epsDiluted": null,
  "basicSharesOutstanding": null,
  "dilutedSharesOutstanding": null,
  "ebit": null,
  "ebitda": null,
  "netIncomeContinuousOperations": null,
  "minorityInterests": null,
  "preferredStockDividends": null,
} satisfies IncomeStatementBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


