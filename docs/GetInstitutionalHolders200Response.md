
# GetInstitutionalHolders200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetFundHolders200ResponseMeta](GetFundHolders200ResponseMeta.md)
`institutionalHolders` | [Array&lt;InstitutionalHolderItem&gt;](InstitutionalHolderItem.md)

## Example

```typescript
import type { GetInstitutionalHolders200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "institutionalHolders": null,
} satisfies GetInstitutionalHolders200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInstitutionalHolders200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


