
# BondResponseItem

BondResponseItem represents details of a bond

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
`access` | [BondsResponseItemAccess](BondsResponseItemAccess.md)

## Example

```typescript
import type { BondResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "country": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
  "type": null,
  "access": null,
} satisfies BondResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BondResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


