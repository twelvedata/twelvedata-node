
# GetMutualFundsWorld200ResponseMutualFundRatings

Ratings of a mutual fund

## Properties

Name | Type
------------ | -------------
`performanceRating` | number
`riskRating` | number
`returnRating` | number

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFundRatings } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "performanceRating": null,
  "riskRating": null,
  "returnRating": null,
} satisfies GetMutualFundsWorld200ResponseMutualFundRatings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFundRatings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


