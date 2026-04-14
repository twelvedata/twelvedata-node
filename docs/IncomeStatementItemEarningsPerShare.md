
# IncomeStatementItemEarningsPerShare

Earnings per share information

## Properties

Name | Type
------------ | -------------
`dilutedEps` | number
`basicEps` | number
`continuingAndDiscontinuedDilutedEps` | number
`continuingAndDiscontinuedBasicEps` | number
`normalizedDilutedEps` | number
`normalizedBasicEps` | number
`reportedNormalizedDilutedEps` | number
`reportedNormalizedBasicEps` | number
`dilutedEpsOtherGainsLosses` | number
`taxLossCarryforwardDilutedEps` | number
`dilutedAccountingChange` | number
`dilutedExtraordinary` | number
`dilutedDiscontinuousOperations` | number
`dilutedContinuousOperations` | number
`basicEpsOtherGainsLosses` | number
`taxLossCarryforwardBasicEps` | number
`basicAccountingChange` | number
`basicExtraordinary` | number
`basicDiscontinuousOperations` | number
`basicContinuousOperations` | number
`dilutedNiAvailToCommonStockholders` | number
`averageDilutionEarnings` | number

## Example

```typescript
import type { IncomeStatementItemEarningsPerShare } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "dilutedEps": null,
  "basicEps": null,
  "continuingAndDiscontinuedDilutedEps": null,
  "continuingAndDiscontinuedBasicEps": null,
  "normalizedDilutedEps": null,
  "normalizedBasicEps": null,
  "reportedNormalizedDilutedEps": null,
  "reportedNormalizedBasicEps": null,
  "dilutedEpsOtherGainsLosses": null,
  "taxLossCarryforwardDilutedEps": null,
  "dilutedAccountingChange": null,
  "dilutedExtraordinary": null,
  "dilutedDiscontinuousOperations": null,
  "dilutedContinuousOperations": null,
  "basicEpsOtherGainsLosses": null,
  "taxLossCarryforwardBasicEps": null,
  "basicAccountingChange": null,
  "basicExtraordinary": null,
  "basicDiscontinuousOperations": null,
  "basicContinuousOperations": null,
  "dilutedNiAvailToCommonStockholders": null,
  "averageDilutionEarnings": null,
} satisfies IncomeStatementItemEarningsPerShare

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemEarningsPerShare
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


