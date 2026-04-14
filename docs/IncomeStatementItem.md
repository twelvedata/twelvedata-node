
# IncomeStatementItem

IncomeStatementItem represents a single income statement record

## Properties

Name | Type
------------ | -------------
`fiscalDate` | string
`year` | number
`revenue` | [IncomeStatementItemRevenue](IncomeStatementItemRevenue.md)
`grossProfit` | [IncomeStatementItemGrossProfit](IncomeStatementItemGrossProfit.md)
`operatingIncome` | [IncomeStatementItemOperatingIncome](IncomeStatementItemOperatingIncome.md)
`netIncome` | [IncomeStatementItemNetIncome](IncomeStatementItemNetIncome.md)
`earningsPerShare` | [IncomeStatementItemEarningsPerShare](IncomeStatementItemEarningsPerShare.md)
`expenses` | [IncomeStatementItemExpenses](IncomeStatementItemExpenses.md)
`interestIncomeAndExpense` | [IncomeStatementItemInterestIncomeAndExpense](IncomeStatementItemInterestIncomeAndExpense.md)
`otherIncomeAndExpenses` | [IncomeStatementItemOtherIncomeAndExpenses](IncomeStatementItemOtherIncomeAndExpenses.md)
`taxes` | [IncomeStatementItemTaxes](IncomeStatementItemTaxes.md)
`depreciationAndAmortization` | [IncomeStatementItemDepreciationAndAmortization](IncomeStatementItemDepreciationAndAmortization.md)
`ebitda` | [IncomeStatementItemEbitda](IncomeStatementItemEbitda.md)
`dividendsAndShares` | [IncomeStatementItemDividendsAndShares](IncomeStatementItemDividendsAndShares.md)
`unusualItems` | [IncomeStatementItemUnusualItems](IncomeStatementItemUnusualItems.md)
`depreciation` | [IncomeStatementItemDepreciation](IncomeStatementItemDepreciation.md)
`pretaxIncome` | [IncomeStatementItemPretaxIncome](IncomeStatementItemPretaxIncome.md)
`specialIncomeCharges` | [IncomeStatementItemSpecialIncomeCharges](IncomeStatementItemSpecialIncomeCharges.md)

## Example

```typescript
import type { IncomeStatementItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiscalDate": null,
  "year": null,
  "revenue": null,
  "grossProfit": null,
  "operatingIncome": null,
  "netIncome": null,
  "earningsPerShare": null,
  "expenses": null,
  "interestIncomeAndExpense": null,
  "otherIncomeAndExpenses": null,
  "taxes": null,
  "depreciationAndAmortization": null,
  "ebitda": null,
  "dividendsAndShares": null,
  "unusualItems": null,
  "depreciation": null,
  "pretaxIncome": null,
  "specialIncomeCharges": null,
} satisfies IncomeStatementItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


