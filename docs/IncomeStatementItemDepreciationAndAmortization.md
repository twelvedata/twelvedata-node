
# IncomeStatementItemDepreciationAndAmortization

Depreciation and amortization information

## Properties

Name | Type
------------ | -------------
`depreciationAmortizationDepletion` | number
`amortizationOfIntangibles` | number
`depreciation` | number
`amortization` | number
`depletion` | number
`depreciationAndAmortizationInIncomeStatement` | number

## Example

```typescript
import type { IncomeStatementItemDepreciationAndAmortization } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "depreciationAmortizationDepletion": null,
  "amortizationOfIntangibles": null,
  "depreciation": null,
  "amortization": null,
  "depletion": null,
  "depreciationAndAmortizationInIncomeStatement": null,
} satisfies IncomeStatementItemDepreciationAndAmortization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemDepreciationAndAmortization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


