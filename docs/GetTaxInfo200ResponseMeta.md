
# GetTaxInfo200ResponseMeta

Metadata about the requested instrument

## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`exchange` | string
`micCode` | string
`country` | string

## Example

```typescript
import type { GetTaxInfo200ResponseMeta } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "exchange": null,
  "micCode": null,
  "country": null,
} satisfies GetTaxInfo200ResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTaxInfo200ResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


