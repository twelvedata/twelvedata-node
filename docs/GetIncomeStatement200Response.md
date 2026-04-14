
# GetIncomeStatement200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetIncomeStatement200ResponseMeta](GetIncomeStatement200ResponseMeta.md)
`incomeStatement` | [Array&lt;IncomeStatementBlock&gt;](IncomeStatementBlock.md)

## Example

```typescript
import type { GetIncomeStatement200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "incomeStatement": null,
} satisfies GetIncomeStatement200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetIncomeStatement200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


