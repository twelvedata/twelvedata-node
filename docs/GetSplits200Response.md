
# GetSplits200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetSplits200ResponseMeta](GetSplits200ResponseMeta.md)
`splits` | [Array&lt;GetSplits200ResponseSplitsInner&gt;](GetSplits200ResponseSplitsInner.md)

## Example

```typescript
import type { GetSplits200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "splits": null,
} satisfies GetSplits200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSplits200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


