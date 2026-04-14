
# AssetsInfoCurrentAssets

Current assets information

## Properties

Name | Type
------------ | -------------
`totalCurrentAssets` | number
`cashCashEquivalentsAndShortTermInvestments` | number
`cashAndCashEquivalents` | number
`cashEquivalents` | number
`cashFinancial` | number
`otherShortTermInvestments` | number
`restrictedCash` | number
`receivables` | [AssetsInfoCurrentAssetsReceivables](AssetsInfoCurrentAssetsReceivables.md)
`inventory` | [AssetsInfoCurrentAssetsInventory](AssetsInfoCurrentAssetsInventory.md)
`prepaidAssets` | number
`currentDeferredAssets` | number
`currentDeferredTaxesAssets` | number
`assetsHeldForSaleCurrent` | number
`hedgingAssetsCurrent` | number
`otherCurrentAssets` | number

## Example

```typescript
import type { AssetsInfoCurrentAssets } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalCurrentAssets": null,
  "cashCashEquivalentsAndShortTermInvestments": null,
  "cashAndCashEquivalents": null,
  "cashEquivalents": null,
  "cashFinancial": null,
  "otherShortTermInvestments": null,
  "restrictedCash": null,
  "receivables": null,
  "inventory": null,
  "prepaidAssets": null,
  "currentDeferredAssets": null,
  "currentDeferredTaxesAssets": null,
  "assetsHeldForSaleCurrent": null,
  "hedgingAssetsCurrent": null,
  "otherCurrentAssets": null,
} satisfies AssetsInfoCurrentAssets

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsInfoCurrentAssets
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


