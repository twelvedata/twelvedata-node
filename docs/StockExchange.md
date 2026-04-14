
# StockExchange

Stock info

## Properties

Name | Type
------------ | -------------
`country` | string
`name` | string

## Example

```typescript
import type { StockExchange } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "country": null,
  "name": null,
} satisfies StockExchange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StockExchange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


