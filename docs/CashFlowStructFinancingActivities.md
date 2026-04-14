
# CashFlowStructFinancingActivities

Financing activities section

## Properties

Name | Type
------------ | -------------
`longTermDebtIssuance` | number
`longTermDebtPayments` | number
`shortTermDebtIssuance` | number
`commonStockIssuance` | number
`commonStockRepurchase` | number
`commonDividends` | number
`otherFinancingCharges` | number
`financingCashFlow` | number

## Example

```typescript
import type { CashFlowStructFinancingActivities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "longTermDebtIssuance": null,
  "longTermDebtPayments": null,
  "shortTermDebtIssuance": null,
  "commonStockIssuance": null,
  "commonStockRepurchase": null,
  "commonDividends": null,
  "otherFinancingCharges": null,
  "financingCashFlow": null,
} satisfies CashFlowStructFinancingActivities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowStructFinancingActivities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


