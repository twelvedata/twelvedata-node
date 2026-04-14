
# AssetsInfoLiabilitiesNonCurrentLiabilities

Non-current liabilities information

## Properties

Name | Type
------------ | -------------
`totalNonCurrentLiabilitiesNetMinorityInterest` | number
`longTermDebtAndCapitalLeaseObligation` | [AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation](AssetsInfoLiabilitiesNonCurrentLiabilitiesLongTermDebtAndCapitalLeaseObligation.md)
`longTermProvisions` | number
`nonCurrentPensionAndOtherPostretirementBenefitPlans` | number
`nonCurrentAccruedExpenses` | number
`dueToRelatedPartiesNonCurrent` | number
`tradeAndOtherPayablesNonCurrent` | number
`nonCurrentDeferredLiabilities` | number
`nonCurrentDeferredRevenue` | number
`nonCurrentDeferredTaxesLiabilities` | number
`otherNonCurrentLiabilities` | number
`preferredSecuritiesOutsideStockEquity` | number
`derivativeProductLiabilities` | number
`capitalLeaseObligations` | number
`restrictedCommonStock` | number

## Example

```typescript
import type { AssetsInfoLiabilitiesNonCurrentLiabilities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalNonCurrentLiabilitiesNetMinorityInterest": null,
  "longTermDebtAndCapitalLeaseObligation": null,
  "longTermProvisions": null,
  "nonCurrentPensionAndOtherPostretirementBenefitPlans": null,
  "nonCurrentAccruedExpenses": null,
  "dueToRelatedPartiesNonCurrent": null,
  "tradeAndOtherPayablesNonCurrent": null,
  "nonCurrentDeferredLiabilities": null,
  "nonCurrentDeferredRevenue": null,
  "nonCurrentDeferredTaxesLiabilities": null,
  "otherNonCurrentLiabilities": null,
  "preferredSecuritiesOutsideStockEquity": null,
  "derivativeProductLiabilities": null,
  "capitalLeaseObligations": null,
  "restrictedCommonStock": null,
} satisfies AssetsInfoLiabilitiesNonCurrentLiabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsInfoLiabilitiesNonCurrentLiabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


