
# MutualFundsListResponseListItem


## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`country` | string
`fundFamily` | string
`fundType` | string
`performanceRating` | number
`riskRating` | number
`currency` | string
`exchange` | string
`micCode` | string

## Example

```typescript
import type { MutualFundsListResponseListItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "country": null,
  "fundFamily": null,
  "fundType": null,
  "performanceRating": null,
  "riskRating": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
} satisfies MutualFundsListResponseListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MutualFundsListResponseListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


