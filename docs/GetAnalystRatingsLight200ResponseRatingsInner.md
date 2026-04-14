
# GetAnalystRatingsLight200ResponseRatingsInner


## Properties

Name | Type
------------ | -------------
`date` | string
`firm` | string
`ratingChange` | string
`ratingCurrent` | string
`ratingPrior` | string

## Example

```typescript
import type { GetAnalystRatingsLight200ResponseRatingsInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "firm": null,
  "ratingChange": null,
  "ratingCurrent": null,
  "ratingPrior": null,
} satisfies GetAnalystRatingsLight200ResponseRatingsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAnalystRatingsLight200ResponseRatingsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


