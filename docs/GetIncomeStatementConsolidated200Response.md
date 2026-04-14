
# GetIncomeStatementConsolidated200Response


## Properties

Name | Type
------------ | -------------
`incomeStatement` | [Array&lt;IncomeStatementItem&gt;](IncomeStatementItem.md)
`status` | string

## Example

```typescript
import type { GetIncomeStatementConsolidated200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "incomeStatement": null,
  "status": null,
} satisfies GetIncomeStatementConsolidated200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetIncomeStatementConsolidated200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


