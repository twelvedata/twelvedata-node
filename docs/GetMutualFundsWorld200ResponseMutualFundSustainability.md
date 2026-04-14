
# GetMutualFundsWorld200ResponseMutualFundSustainability

Sustainability information of a mutual fund

## Properties

Name | Type
------------ | -------------
`score` | number
`corporateEsgPillars` | [GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars](GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars.md)
`sustainableInvestment` | boolean
`corporateAum` | number

## Example

```typescript
import type { GetMutualFundsWorld200ResponseMutualFundSustainability } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "score": null,
  "corporateEsgPillars": null,
  "sustainableInvestment": null,
  "corporateAum": null,
} satisfies GetMutualFundsWorld200ResponseMutualFundSustainability

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsWorld200ResponseMutualFundSustainability
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


