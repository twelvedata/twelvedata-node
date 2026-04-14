
# InlineObject8


## Properties

Name | Type
------------ | -------------
`meta` | [InlineObject8Meta](InlineObject8Meta.md)
`values` | [Array&lt;InlineObject8ValuesInner&gt;](InlineObject8ValuesInner.md)
`status` | string

## Example

```typescript
import type { InlineObject8 } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies InlineObject8

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineObject8
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


