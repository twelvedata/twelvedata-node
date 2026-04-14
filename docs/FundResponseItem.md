
# FundResponseItem

FundResponseItem represents details of a fund

## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`country` | string
`currency` | string
`exchange` | string
`micCode` | string
`type` | string
`figiCode` | string
`cfiCode` | string
`isin` | string
`cusip` | string
`access` | [EtfResponseItemAccess](EtfResponseItemAccess.md)

## Example

```typescript
import type { FundResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "country": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
  "type": null,
  "figiCode": null,
  "cfiCode": null,
  "isin": null,
  "cusip": null,
  "access": null,
} satisfies FundResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FundResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


