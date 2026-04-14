
# GetStatistics200ResponseStatisticsFinancials

Financial information of the company

## Properties

Name | Type
------------ | -------------
`fiscalYearEnds` | string
`mostRecentQuarter` | string
`grossMargin` | number
`profitMargin` | number
`operatingMargin` | number
`returnOnAssetsTtm` | number
`returnOnEquityTtm` | number
`incomeStatement` | [GetStatistics200ResponseStatisticsFinancialsIncomeStatement](GetStatistics200ResponseStatisticsFinancialsIncomeStatement.md)
`balanceSheet` | [GetStatistics200ResponseStatisticsFinancialsBalanceSheet](GetStatistics200ResponseStatisticsFinancialsBalanceSheet.md)
`cashFlow` | [GetStatistics200ResponseStatisticsFinancialsCashFlow](GetStatistics200ResponseStatisticsFinancialsCashFlow.md)

## Example

```typescript
import type { GetStatistics200ResponseStatisticsFinancials } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiscalYearEnds": null,
  "mostRecentQuarter": null,
  "grossMargin": null,
  "profitMargin": null,
  "operatingMargin": null,
  "returnOnAssetsTtm": null,
  "returnOnEquityTtm": null,
  "incomeStatement": null,
  "balanceSheet": null,
  "cashFlow": null,
} satisfies GetStatistics200ResponseStatisticsFinancials

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsFinancials
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


