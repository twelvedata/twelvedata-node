
# GetStatistics200ResponseStatisticsFinancialsIncomeStatement

Income statement information

## Properties

Name | Type
------------ | -------------
`revenueTtm` | number
`revenuePerShareTtm` | number
`quarterlyRevenueGrowth` | number
`grossProfitTtm` | number
`ebitda` | number
`netIncomeToCommonTtm` | number
`dilutedEpsTtm` | number
`quarterlyEarningsGrowthYoy` | number

## Example

```typescript
import type { GetStatistics200ResponseStatisticsFinancialsIncomeStatement } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "revenueTtm": null,
  "revenuePerShareTtm": null,
  "quarterlyRevenueGrowth": null,
  "grossProfitTtm": null,
  "ebitda": null,
  "netIncomeToCommonTtm": null,
  "dilutedEpsTtm": null,
  "quarterlyEarningsGrowthYoy": null,
} satisfies GetStatistics200ResponseStatisticsFinancialsIncomeStatement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsFinancialsIncomeStatement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


