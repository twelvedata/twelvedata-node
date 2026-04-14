
# CashFlowStruct


## Properties

Name | Type
------------ | -------------
`fiscalDate` | string
`quarter` | string
`year` | number
`operatingActivities` | [CashFlowStructOperatingActivities](CashFlowStructOperatingActivities.md)
`investingActivities` | [CashFlowStructInvestingActivities](CashFlowStructInvestingActivities.md)
`financingActivities` | [CashFlowStructFinancingActivities](CashFlowStructFinancingActivities.md)
`endCashPosition` | number
`incomeTaxPaid` | number
`interestPaid` | number
`freeCashFlow` | number

## Example

```typescript
import type { CashFlowStruct } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiscalDate": null,
  "quarter": null,
  "year": null,
  "operatingActivities": null,
  "investingActivities": null,
  "financingActivities": null,
  "endCashPosition": null,
  "incomeTaxPaid": null,
  "interestPaid": null,
  "freeCashFlow": null,
} satisfies CashFlowStruct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowStruct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


