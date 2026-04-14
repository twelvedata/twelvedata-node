
# FundHolderItem


## Properties

Name | Type
------------ | -------------
`entityName` | string
`dateReported` | string
`shares` | number
`value` | number
`percentHeld` | number

## Example

```typescript
import type { FundHolderItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "entityName": null,
  "dateReported": null,
  "shares": null,
  "value": null,
  "percentHeld": null,
} satisfies FundHolderItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FundHolderItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


