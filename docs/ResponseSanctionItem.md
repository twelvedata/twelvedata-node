
# ResponseSanctionItem


## Properties

Name | Type
------------ | -------------
`source` | string
`program` | string
`notes` | string
`lists` | [Array&lt;ResponseSanctionItemList&gt;](ResponseSanctionItemList.md)

## Example

```typescript
import type { ResponseSanctionItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "source": null,
  "program": null,
  "notes": null,
  "lists": null,
} satisfies ResponseSanctionItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseSanctionItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


