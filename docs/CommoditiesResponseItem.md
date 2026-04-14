
# CommoditiesResponseItem

CommoditiesResponseItem represents details of a commodity

## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`category` | string
`description` | string

## Example

```typescript
import type { CommoditiesResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "category": null,
  "description": null,
} satisfies CommoditiesResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommoditiesResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


