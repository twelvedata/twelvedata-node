
# SymbolSearchResponseItem

SymbolSearchResponseItem represents details of a symbol search result

## Properties

Name | Type
------------ | -------------
`symbol` | string
`instrumentName` | string
`exchange` | string
`micCode` | string
`exchangeTimezone` | string
`instrumentType` | string
`country` | string
`currency` | string
`access` | [SymbolSearchResponseItemAccess](SymbolSearchResponseItemAccess.md)

## Example

```typescript
import type { SymbolSearchResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "instrumentName": null,
  "exchange": null,
  "micCode": null,
  "exchangeTimezone": null,
  "instrumentType": null,
  "country": null,
  "currency": null,
  "access": null,
} satisfies SymbolSearchResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SymbolSearchResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


