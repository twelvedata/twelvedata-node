
# MarketMoversResponseBody


## Properties

Name | Type
------------ | -------------
`values` | [Array&lt;MarketMoversResponseValue&gt;](MarketMoversResponseValue.md)
`status` | string

## Example

```typescript
import type { MarketMoversResponseBody } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "values": null,
  "status": null,
} satisfies MarketMoversResponseBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketMoversResponseBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


