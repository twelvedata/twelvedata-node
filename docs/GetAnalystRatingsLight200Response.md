
# GetAnalystRatingsLight200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetAnalystRatingsLight200ResponseMeta](GetAnalystRatingsLight200ResponseMeta.md)
`ratings` | [Array&lt;GetAnalystRatingsLight200ResponseRatingsInner&gt;](GetAnalystRatingsLight200ResponseRatingsInner.md)
`status` | string

## Example

```typescript
import type { GetAnalystRatingsLight200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "ratings": null,
  "status": null,
} satisfies GetAnalystRatingsLight200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAnalystRatingsLight200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


