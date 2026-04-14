
# GetStatistics200ResponseStatisticsStockStatistics

Stock statistics of the company

## Properties

Name | Type
------------ | -------------
`sharesOutstanding` | number
`floatShares` | number
`avg10Volume` | number
`avg90Volume` | number
`sharesShort` | number
`shortRatio` | number
`shortPercentOfSharesOutstanding` | number
`percentHeldByInsiders` | number
`percentHeldByInstitutions` | number

## Example

```typescript
import type { GetStatistics200ResponseStatisticsStockStatistics } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "sharesOutstanding": null,
  "floatShares": null,
  "avg10Volume": null,
  "avg90Volume": null,
  "sharesShort": null,
  "shortRatio": null,
  "shortPercentOfSharesOutstanding": null,
  "percentHeldByInsiders": null,
  "percentHeldByInstitutions": null,
} satisfies GetStatistics200ResponseStatisticsStockStatistics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsStockStatistics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


