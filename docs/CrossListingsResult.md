
# CrossListingsResult

Represents the result of cross listings

## Properties

Name | Type
------------ | -------------
`count` | number
`list` | [Array&lt;CrossListingsItem&gt;](CrossListingsItem.md)

## Example

```typescript
import type { CrossListingsResult } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "list": null,
} satisfies CrossListingsResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrossListingsResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


