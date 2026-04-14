
# IncomeStatementBlockOperatingExpense

Operating expense details

## Properties

Name | Type
------------ | -------------
`researchAndDevelopment` | number
`sellingGeneralAndAdministrative` | number
`otherOperatingExpenses` | number

## Example

```typescript
import type { IncomeStatementBlockOperatingExpense } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "researchAndDevelopment": null,
  "sellingGeneralAndAdministrative": null,
  "otherOperatingExpenses": null,
} satisfies IncomeStatementBlockOperatingExpense

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementBlockOperatingExpense
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


