
# GetRevenueEstimate200ResponseRevenueEstimateInner


## Properties

Name | Type
------------ | -------------
`date` | string
`period` | string
`numberOfAnalysts` | number
`avgEstimate` | number
`lowEstimate` | number
`highEstimate` | number
`yearAgoSales` | number
`salesGrowth` | number

## Example

```typescript
import type { GetRevenueEstimate200ResponseRevenueEstimateInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "period": null,
  "numberOfAnalysts": null,
  "avgEstimate": null,
  "lowEstimate": null,
  "highEstimate": null,
  "yearAgoSales": null,
  "salesGrowth": null,
} satisfies GetRevenueEstimate200ResponseRevenueEstimateInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetRevenueEstimate200ResponseRevenueEstimateInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


