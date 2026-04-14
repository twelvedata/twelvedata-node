
# GetMarketCap200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetMarketCap200ResponseMeta](GetMarketCap200ResponseMeta.md)
`marketCap` | [Array&lt;GetMarketCap200ResponseMarketCapInner&gt;](GetMarketCap200ResponseMarketCapInner.md)

## Example

```typescript
import type { GetMarketCap200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "marketCap": null,
} satisfies GetMarketCap200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMarketCap200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


