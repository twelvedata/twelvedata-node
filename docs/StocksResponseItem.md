
# StocksResponseItem

StocksResponseItem represents details of a stock instrument

## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`currency` | string
`exchange` | string
`micCode` | string
`country` | string
`type` | string
`figiCode` | string
`cfiCode` | string
`isin` | string
`cusip` | string
`access` | [EtfResponseItemAccess](EtfResponseItemAccess.md)

## Example

```typescript
import type { StocksResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
  "country": null,
  "type": null,
  "figiCode": null,
  "cfiCode": null,
  "isin": null,
  "cusip": null,
  "access": null,
} satisfies StocksResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StocksResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


