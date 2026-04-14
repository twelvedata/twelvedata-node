
# GetGrowthEstimates200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetEarningsEstimate200ResponseMeta](GetEarningsEstimate200ResponseMeta.md)
`growthEstimates` | [GetGrowthEstimates200ResponseGrowthEstimates](GetGrowthEstimates200ResponseGrowthEstimates.md)
`status` | string

## Example

```typescript
import type { GetGrowthEstimates200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "growthEstimates": null,
  "status": null,
} satisfies GetGrowthEstimates200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetGrowthEstimates200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


