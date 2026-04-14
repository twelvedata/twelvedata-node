
# AssetsInfoLiabilitiesCurrentLiabilities

Current liabilities information

## Properties

Name | Type
------------ | -------------
`totalCurrentLiabilities` | number
`currentDebtAndCapitalLeaseObligation` | number
`currentDebt` | number
`currentCapitalLeaseObligation` | number
`otherCurrentBorrowings` | number
`lineOfCredit` | number
`commercialPaper` | number
`currentNotesPayable` | number
`currentProvisions` | number
`payablesAndAccruedExpenses` | [AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses](AssetsInfoLiabilitiesCurrentLiabilitiesPayablesAndAccruedExpenses.md)
`pensionAndOtherPostRetirementBenefitPlansCurrent` | number
`employeeBenefits` | number
`currentDeferredLiabilities` | number
`currentDeferredRevenue` | number
`currentDeferredTaxesLiabilities` | number
`otherCurrentLiabilities` | number
`liabilitiesHeldForSaleNonCurrent` | number

## Example

```typescript
import type { AssetsInfoLiabilitiesCurrentLiabilities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalCurrentLiabilities": null,
  "currentDebtAndCapitalLeaseObligation": null,
  "currentDebt": null,
  "currentCapitalLeaseObligation": null,
  "otherCurrentBorrowings": null,
  "lineOfCredit": null,
  "commercialPaper": null,
  "currentNotesPayable": null,
  "currentProvisions": null,
  "payablesAndAccruedExpenses": null,
  "pensionAndOtherPostRetirementBenefitPlansCurrent": null,
  "employeeBenefits": null,
  "currentDeferredLiabilities": null,
  "currentDeferredRevenue": null,
  "currentDeferredTaxesLiabilities": null,
  "otherCurrentLiabilities": null,
  "liabilitiesHeldForSaleNonCurrent": null,
} satisfies AssetsInfoLiabilitiesCurrentLiabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsInfoLiabilitiesCurrentLiabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


