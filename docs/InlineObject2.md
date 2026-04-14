
# InlineObject2


## Properties

Name | Type
------------ | -------------
`brokerages` | Array&lt;string&gt;
`expenses` | [InlineObject2Expenses](InlineObject2Expenses.md)
`minimums` | [InlineObject2Minimums](InlineObject2Minimums.md)
`pricing` | [InlineObject2Pricing](InlineObject2Pricing.md)

## Example

```typescript
import type { InlineObject2 } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "brokerages": null,
  "expenses": null,
  "minimums": null,
  "pricing": null,
} satisfies InlineObject2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineObject2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


