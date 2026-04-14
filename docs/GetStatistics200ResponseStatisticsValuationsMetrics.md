
# GetStatistics200ResponseStatisticsValuationsMetrics

Valuation metrics of the company

## Properties

Name | Type
------------ | -------------
`marketCapitalization` | number
`enterpriseValue` | number
`trailingPe` | number
`forwardPe` | number
`pegRatio` | number
`priceToSalesTtm` | number
`priceToBookMrq` | number
`enterpriseToRevenue` | number
`enterpriseToEbitda` | number

## Example

```typescript
import type { GetStatistics200ResponseStatisticsValuationsMetrics } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "marketCapitalization": null,
  "enterpriseValue": null,
  "trailingPe": null,
  "forwardPe": null,
  "pegRatio": null,
  "priceToSalesTtm": null,
  "priceToBookMrq": null,
  "enterpriseToRevenue": null,
  "enterpriseToEbitda": null,
} satisfies GetStatistics200ResponseStatisticsValuationsMetrics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsValuationsMetrics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


