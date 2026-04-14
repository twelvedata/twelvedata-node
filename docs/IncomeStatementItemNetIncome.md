
# IncomeStatementItemNetIncome

Net income information

## Properties

Name | Type
------------ | -------------
`netIncomeValue` | number
`netIncomeCommonStockholders` | number
`netIncomeIncludingNoncontrollingInterests` | number
`netIncomeFromTaxLossCarryforward` | number
`netIncomeExtraordinary` | number
`netIncomeDiscontinuousOperations` | number
`netIncomeContinuousOperations` | number
`netIncomeFromContinuingOperationNetMinorityInterest` | number
`netIncomeFromContinuingAndDiscontinuedOperation` | number
`normalizedIncome` | number
`minorityInterests` | number

## Example

```typescript
import type { IncomeStatementItemNetIncome } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "netIncomeValue": null,
  "netIncomeCommonStockholders": null,
  "netIncomeIncludingNoncontrollingInterests": null,
  "netIncomeFromTaxLossCarryforward": null,
  "netIncomeExtraordinary": null,
  "netIncomeDiscontinuousOperations": null,
  "netIncomeContinuousOperations": null,
  "netIncomeFromContinuingOperationNetMinorityInterest": null,
  "netIncomeFromContinuingAndDiscontinuedOperation": null,
  "normalizedIncome": null,
  "minorityInterests": null,
} satisfies IncomeStatementItemNetIncome

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemNetIncome
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


