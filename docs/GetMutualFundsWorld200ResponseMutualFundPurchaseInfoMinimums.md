
# GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums

Minimum investment amounts required to purchase or add to the mutual fund, including IRA minimums

## Properties

Name | Type
------------ | -------------
`initialInvestment` | number
`additionalInvestment` | number
`initialIraInvestment` | number
`additionalIraInvestment` | number

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "initialInvestment": null,
  "additionalInvestment": null,
  "initialIraInvestment": null,
  "additionalIraInvestment": null,
} satisfies GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


