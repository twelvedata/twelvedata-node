
# GetTaxInfo200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTaxInfo200ResponseMeta](GetTaxInfo200ResponseMeta.md)
`data` | [GetTaxInfo200ResponseData](GetTaxInfo200ResponseData.md)
`status` | string

## Example

```typescript
import type { GetTaxInfo200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "status": null,
} satisfies GetTaxInfo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTaxInfo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


