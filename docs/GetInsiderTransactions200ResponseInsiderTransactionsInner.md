
# GetInsiderTransactions200ResponseInsiderTransactionsInner


## Properties

Name | Type
------------ | -------------
`fullName` | string
`position` | string
`dateReported` | string
`isDirect` | boolean
`shares` | number
`value` | number
`description` | string

## Example

```typescript
import type { GetInsiderTransactions200ResponseInsiderTransactionsInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fullName": null,
  "position": null,
  "dateReported": null,
  "isDirect": null,
  "shares": null,
  "value": null,
  "description": null,
} satisfies GetInsiderTransactions200ResponseInsiderTransactionsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetInsiderTransactions200ResponseInsiderTransactionsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


