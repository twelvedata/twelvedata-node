
# GetEarnings200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetEarnings200ResponseMeta](GetEarnings200ResponseMeta.md)
`earnings` | [Array&lt;EarningsItem&gt;](EarningsItem.md)
`status` | string

## Example

```typescript
import type { GetEarnings200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "earnings": null,
  "status": null,
} satisfies GetEarnings200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEarnings200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


