
# GetDividends200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetDividends200ResponseMeta](GetDividends200ResponseMeta.md)
`dividends` | [Array&lt;GetDividends200ResponseDividendsInner&gt;](GetDividends200ResponseDividendsInner.md)

## Example

```typescript
import type { GetDividends200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "dividends": null,
} satisfies GetDividends200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetDividends200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


