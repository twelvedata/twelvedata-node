
# CashFlowStructOperatingActivities

Operating activities section

## Properties

Name | Type
------------ | -------------
`netIncome` | number
`depreciation` | number
`deferredTaxes` | number
`stockBasedCompensation` | number
`otherNonCashItems` | number
`accountsReceivable` | number
`accountsPayable` | number
`otherAssetsLiabilities` | number
`operatingCashFlow` | number

## Example

```typescript
import type { CashFlowStructOperatingActivities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "netIncome": null,
  "depreciation": null,
  "deferredTaxes": null,
  "stockBasedCompensation": null,
  "otherNonCashItems": null,
  "accountsReceivable": null,
  "accountsPayable": null,
  "otherAssetsLiabilities": null,
  "operatingCashFlow": null,
} satisfies CashFlowStructOperatingActivities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowStructOperatingActivities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


