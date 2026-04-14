
# GetInsiderTransactions200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetInsiderTransactions200ResponseMeta](GetInsiderTransactions200ResponseMeta.md)
`insiderTransactions` | [Array&lt;GetInsiderTransactions200ResponseInsiderTransactionsInner&gt;](GetInsiderTransactions200ResponseInsiderTransactionsInner.md)

## Example

```typescript
import type { GetInsiderTransactions200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "insiderTransactions": null,
} satisfies GetInsiderTransactions200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInsiderTransactions200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


