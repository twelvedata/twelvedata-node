
# GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets

Current assets section

## Properties

Name | Type
------------ | -------------
`cash` | number
`cashEquivalents` | number
`cashAndCashEquivalents` | number
`otherShortTermInvestments` | number
`accountsReceivable` | number
`otherReceivables` | number
`inventory` | number
`prepaidAssets` | number
`restrictedCash` | number
`assetsHeldForSale` | number
`hedgingAssets` | number
`otherCurrentAssets` | number
`totalCurrentAssets` | number

## Example

```typescript
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "cash": null,
  "cashEquivalents": null,
  "cashAndCashEquivalents": null,
  "otherShortTermInvestments": null,
  "accountsReceivable": null,
  "otherReceivables": null,
  "inventory": null,
  "prepaidAssets": null,
  "restrictedCash": null,
  "assetsHeldForSale": null,
  "hedgingAssets": null,
  "otherCurrentAssets": null,
  "totalCurrentAssets": null,
} satisfies GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


