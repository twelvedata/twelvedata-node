
# IncomeStatementItemTaxes

Taxes information

## Properties

Name | Type
------------ | -------------
`taxProvision` | number
`taxEffectOfUnusualItems` | number
`taxRateForCalculations` | number
`otherTaxes` | number

## Example

```typescript
import type { IncomeStatementItemTaxes } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "taxProvision": null,
  "taxEffectOfUnusualItems": null,
  "taxRateForCalculations": null,
  "otherTaxes": null,
} satisfies IncomeStatementItemTaxes

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemTaxes
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


