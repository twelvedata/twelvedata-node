
# AssetsInfoCurrentAssetsReceivables

Receivables information

## Properties

Name | Type
------------ | -------------
`totalReceivables` | number
`accountsReceivable` | number
`grossAccountsReceivable` | number
`allowanceForDoubtfulAccountsReceivable` | number
`receivablesAdjustmentsAllowances` | number
`otherReceivables` | number
`dueFromRelatedPartiesCurrent` | number
`taxesReceivable` | number
`accruedInterestReceivable` | number
`notesReceivable` | number
`loansReceivable` | number

## Example

```typescript
import type { AssetsInfoCurrentAssetsReceivables } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalReceivables": null,
  "accountsReceivable": null,
  "grossAccountsReceivable": null,
  "allowanceForDoubtfulAccountsReceivable": null,
  "receivablesAdjustmentsAllowances": null,
  "otherReceivables": null,
  "dueFromRelatedPartiesCurrent": null,
  "taxesReceivable": null,
  "accruedInterestReceivable": null,
  "notesReceivable": null,
  "loansReceivable": null,
} satisfies AssetsInfoCurrentAssetsReceivables

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsInfoCurrentAssetsReceivables
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


