
# GetEpsRevisions200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetEarningsEstimate200ResponseMeta](GetEarningsEstimate200ResponseMeta.md)
`epsRevision` | [Array&lt;GetEpsRevisions200ResponseEpsRevisionInner&gt;](GetEpsRevisions200ResponseEpsRevisionInner.md)
`status` | string

## Example

```typescript
import type { GetEpsRevisions200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "epsRevision": null,
  "status": null,
} satisfies GetEpsRevisions200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEpsRevisions200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


