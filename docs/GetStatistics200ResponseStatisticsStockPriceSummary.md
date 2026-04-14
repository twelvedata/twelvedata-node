
# GetStatistics200ResponseStatisticsStockPriceSummary

Stock price summary of the company

## Properties

Name | Type
------------ | -------------
`fiftyTwoWeekLow` | number
`fiftyTwoWeekHigh` | number
`fiftyTwoWeekChange` | number
`beta` | number
`day50Ma` | number
`day200Ma` | number

## Example

```typescript
import type { GetStatistics200ResponseStatisticsStockPriceSummary } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiftyTwoWeekLow": null,
  "fiftyTwoWeekHigh": null,
  "fiftyTwoWeekChange": null,
  "beta": null,
  "day50Ma": null,
  "day200Ma": null,
} satisfies GetStatistics200ResponseStatisticsStockPriceSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsStockPriceSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


