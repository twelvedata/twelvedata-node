
# ResponseMutualFundWorldSustainability

Sustainability score and ESG (Environmental, Social, Governance) metrics for the fund

## Properties

Name | Type
------------ | -------------
`score` | number
`corporateEsgPillars` | [GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars](GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars.md)
`sustainableInvestment` | boolean
`corporateAum` | number

## Example

```typescript
import type { ResponseMutualFundWorldSustainability } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "score": null,
  "corporateEsgPillars": null,
  "sustainableInvestment": null,
  "corporateAum": null,
} satisfies ResponseMutualFundWorldSustainability

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseMutualFundWorldSustainability
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


