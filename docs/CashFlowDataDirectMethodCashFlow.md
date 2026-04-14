
# CashFlowDataDirectMethodCashFlow

Direct method cash flow

## Properties

Name | Type
------------ | -------------
`classesOfCashReceiptsFromOperatingActivities` | number
`otherCashReceiptsFromOperatingActivities` | number
`receiptsFromGovernmentGrants` | number
`receiptsFromCustomers` | number
`classesOfCashPayments` | number
`otherCashPaymentsFromOperatingActivities` | number
`paymentsOnBehalfOfEmployees` | number
`paymentsToSuppliersForGoodsAndServices` | number

## Example

```typescript
import type { CashFlowDataDirectMethodCashFlow } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "classesOfCashReceiptsFromOperatingActivities": null,
  "otherCashReceiptsFromOperatingActivities": null,
  "receiptsFromGovernmentGrants": null,
  "receiptsFromCustomers": null,
  "classesOfCashPayments": null,
  "otherCashPaymentsFromOperatingActivities": null,
  "paymentsOnBehalfOfEmployees": null,
  "paymentsToSuppliersForGoodsAndServices": null,
} satisfies CashFlowDataDirectMethodCashFlow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowDataDirectMethodCashFlow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


