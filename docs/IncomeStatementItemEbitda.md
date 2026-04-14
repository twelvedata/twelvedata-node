
# IncomeStatementItemEbitda

EBITDA information

## Properties

Name | Type
------------ | -------------
`ebitdaValue` | number
`normalizedEbitdaValue` | number
`ebitValue` | number

## Example

```typescript
import type { IncomeStatementItemEbitda } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "ebitdaValue": null,
  "normalizedEbitdaValue": null,
  "ebitValue": null,
} satisfies IncomeStatementItemEbitda

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemEbitda
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


