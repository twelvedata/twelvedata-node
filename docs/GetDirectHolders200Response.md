
# GetDirectHolders200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetDirectHolders200ResponseMeta](GetDirectHolders200ResponseMeta.md)
`directHolders` | [Array&lt;DirectHolderItem&gt;](DirectHolderItem.md)

## Example

```typescript
import type { GetDirectHolders200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "directHolders": null,
} satisfies GetDirectHolders200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDirectHolders200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


