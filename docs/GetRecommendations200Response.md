
# GetRecommendations200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetRecommendations200ResponseMeta](GetRecommendations200ResponseMeta.md)
`trends` | [GetRecommendations200ResponseTrends](GetRecommendations200ResponseTrends.md)
`rating` | number
`status` | string

## Example

```typescript
import type { GetRecommendations200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "trends": null,
  "rating": null,
  "status": null,
} satisfies GetRecommendations200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetRecommendations200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


