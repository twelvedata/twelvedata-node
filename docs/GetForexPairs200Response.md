
# GetForexPairs200Response


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;ForexResponseItem&gt;](ForexResponseItem.md)
`status` | string

## Example

```typescript
import type { GetForexPairs200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "status": null,
} satisfies GetForexPairs200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetForexPairs200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


