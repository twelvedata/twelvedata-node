
# IncomeStatementItemUnusualItems

Unusual items information

## Properties

Name | Type
------------ | -------------
`totalUnusualItems` | number
`totalUnusualItemsExcludingGoodwill` | number

## Example

```typescript
import type { IncomeStatementItemUnusualItems } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalUnusualItems": null,
  "totalUnusualItemsExcludingGoodwill": null,
} satisfies IncomeStatementItemUnusualItems

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemUnusualItems
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


