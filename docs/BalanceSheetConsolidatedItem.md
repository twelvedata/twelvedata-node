
# BalanceSheetConsolidatedItem

Balance sheet for a specific fiscal date

## Properties

Name | Type
------------ | -------------
`fiscalDate` | string
`assets` | [AssetsInfo](AssetsInfo.md)

## Example

```typescript
import type { BalanceSheetConsolidatedItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiscalDate": null,
  "assets": null,
} satisfies BalanceSheetConsolidatedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BalanceSheetConsolidatedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


