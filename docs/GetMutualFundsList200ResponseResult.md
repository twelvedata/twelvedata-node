
# GetMutualFundsList200ResponseResult

Response result

## Properties

Name | Type
------------ | -------------
`count` | number
`list` | [Array&lt;MutualFundsListResponseListItem&gt;](MutualFundsListResponseListItem.md)

## Example

```typescript
import type { GetMutualFundsList200ResponseResult } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "count": null,
  "list": null,
} satisfies GetMutualFundsList200ResponseResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetMutualFundsList200ResponseResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


