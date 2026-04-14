
# CashFlowDataCashPosition

Cash position

## Properties

Name | Type
------------ | -------------
`beginningCashPosition` | number
`endCashPosition` | number
`changesInCash` | number
`otherCashAdjustmentOutsideChangeInCash` | number
`otherCashAdjustmentInsideChangeInCash` | number
`effectOfExchangeRateChanges` | number

## Example

```typescript
import type { CashFlowDataCashPosition } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "beginningCashPosition": null,
  "endCashPosition": null,
  "changesInCash": null,
  "otherCashAdjustmentOutsideChangeInCash": null,
  "otherCashAdjustmentInsideChangeInCash": null,
  "effectOfExchangeRateChanges": null,
} satisfies CashFlowDataCashPosition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowDataCashPosition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


