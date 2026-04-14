
# ModelIndex

Indices info

## Properties

Name | Type
------------ | -------------
`country` | string
`currency` | string
`exchange` | string
`micCode` | string
`name` | string
`symbol` | string

## Example

```typescript
import type { ModelIndex } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "country": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
  "name": null,
  "symbol": null,
} satisfies ModelIndex

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelIndex
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


