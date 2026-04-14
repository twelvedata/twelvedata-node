
# GetPriceTarget200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetPriceTarget200ResponseMeta](GetPriceTarget200ResponseMeta.md)
`priceTarget` | [GetPriceTarget200ResponsePriceTarget](GetPriceTarget200ResponsePriceTarget.md)
`status` | string

## Example

```typescript
import type { GetPriceTarget200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "priceTarget": null,
  "status": null,
} satisfies GetPriceTarget200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPriceTarget200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


