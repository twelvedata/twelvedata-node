
# InlineObject2Pricing


## Properties

Name | Type
------------ | -------------
`_12monthHigh` | number
`_12monthLow` | number
`lastMonth` | number
`nav` | number

## Example

```typescript
import type { InlineObject2Pricing } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "_12monthHigh": null,
  "_12monthLow": null,
  "lastMonth": null,
  "nav": null,
} satisfies InlineObject2Pricing

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineObject2Pricing
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


