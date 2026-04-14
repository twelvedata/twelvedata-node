
# ResponseMutualFundWorldPurchaseInfo

Purchase information for the mutual fund

## Properties

Name | Type
------------ | -------------
`expenses` | [GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses.md)
`minimums` | [GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums.md)
`pricing` | [GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing.md)
`brokerages` | Array&lt;string&gt;

## Example

```typescript
import type { ResponseMutualFundWorldPurchaseInfo } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "expenses": null,
  "minimums": null,
  "pricing": null,
  "brokerages": null,
} satisfies ResponseMutualFundWorldPurchaseInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseMutualFundWorldPurchaseInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


