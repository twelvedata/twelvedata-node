
# GetStatistics200ResponseStatistics

Statistics of the company

## Properties

Name | Type
------------ | -------------
`valuationsMetrics` | [GetStatistics200ResponseStatisticsValuationsMetrics](GetStatistics200ResponseStatisticsValuationsMetrics.md)
`financials` | [GetStatistics200ResponseStatisticsFinancials](GetStatistics200ResponseStatisticsFinancials.md)
`stockStatistics` | [GetStatistics200ResponseStatisticsStockStatistics](GetStatistics200ResponseStatisticsStockStatistics.md)
`stockPriceSummary` | [GetStatistics200ResponseStatisticsStockPriceSummary](GetStatistics200ResponseStatisticsStockPriceSummary.md)
`dividendsAndSplits` | [GetStatistics200ResponseStatisticsDividendsAndSplits](GetStatistics200ResponseStatisticsDividendsAndSplits.md)

## Example

```typescript
import type { GetStatistics200ResponseStatistics } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "valuationsMetrics": null,
  "financials": null,
  "stockStatistics": null,
  "stockPriceSummary": null,
  "dividendsAndSplits": null,
} satisfies GetStatistics200ResponseStatistics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatistics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


