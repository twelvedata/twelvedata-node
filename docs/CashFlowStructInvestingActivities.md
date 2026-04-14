
# CashFlowStructInvestingActivities

Investing activities section

## Properties

Name | Type
------------ | -------------
`capitalExpenditures` | number
`netIntangibles` | number
`netAcquisitions` | number
`purchaseOfInvestments` | number
`saleOfInvestments` | number
`otherInvestingActivity` | number
`investingCashFlow` | number

## Example

```typescript
import type { CashFlowStructInvestingActivities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "capitalExpenditures": null,
  "netIntangibles": null,
  "netAcquisitions": null,
  "purchaseOfInvestments": null,
  "saleOfInvestments": null,
  "otherInvestingActivity": null,
  "investingCashFlow": null,
} satisfies CashFlowStructInvestingActivities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowStructInvestingActivities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


