
# InlineObject16


## Properties

Name | Type
------------ | -------------
`meta` | [InlineObject16Meta](InlineObject16Meta.md)
`values` | [Array&lt;InlineObject16ValuesInner&gt;](InlineObject16ValuesInner.md)
`status` | string

## Example

```typescript
import type { InlineObject16 } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies InlineObject16

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineObject16
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


