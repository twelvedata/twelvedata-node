
# GetEdgarFilingsArchive200ResponseMeta

Meta information about the company and listing

## Properties

Name | Type
------------ | -------------
`symbol` | string
`exchange` | string
`micCode` | string
`type` | string

## Example

```typescript
import type { GetEdgarFilingsArchive200ResponseMeta } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "exchange": null,
  "micCode": null,
  "type": null,
} satisfies GetEdgarFilingsArchive200ResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEdgarFilingsArchive200ResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


