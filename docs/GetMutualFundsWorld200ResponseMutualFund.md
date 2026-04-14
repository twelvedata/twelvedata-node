
# GetMutualFundsWorld200ResponseMutualFund

Mutual fund information

## Properties

Name | Type
------------ | -------------
`summary` | [GetMutualFundsWorld200ResponseMutualFundSummary](GetMutualFundsWorld200ResponseMutualFundSummary.md)
`performance` | [GetMutualFundsWorld200ResponseMutualFundPerformance](GetMutualFundsWorld200ResponseMutualFundPerformance.md)
`risk` | [GetMutualFundsWorld200ResponseMutualFundRisk](GetMutualFundsWorld200ResponseMutualFundRisk.md)
`ratings` | [GetMutualFundsWorld200ResponseMutualFundRatings](GetMutualFundsWorld200ResponseMutualFundRatings.md)
`composition` | [GetMutualFundsWorld200ResponseMutualFundComposition](GetMutualFundsWorld200ResponseMutualFundComposition.md)
`purchaseInfo` | [GetMutualFundsWorld200ResponseMutualFundPurchaseInfo](GetMutualFundsWorld200ResponseMutualFundPurchaseInfo.md)
`sustainability` | [GetMutualFundsWorld200ResponseMutualFundSustainability](GetMutualFundsWorld200ResponseMutualFundSustainability.md)

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFund } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "summary": null,
  "performance": null,
  "risk": null,
  "ratings": null,
  "composition": null,
  "purchaseInfo": null,
  "sustainability": null,
} satisfies GetMutualFundsWorld200ResponseMutualFund

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFund
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


