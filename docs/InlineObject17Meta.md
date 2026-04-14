
# InlineObject17Meta

Json object with request general information

## Properties

Name | Type
------------ | -------------
`symbol` | string
`interval` | string
`currency` | string
`exchangeTimezone` | string
`exchange` | string
`micCode` | string
`type` | string
`indicator` | [InlineObject17MetaIndicator](InlineObject17MetaIndicator.md)

## Example

```typescript
import type { InlineObject17Meta } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "interval": null,
  "currency": null,
  "exchangeTimezone": null,
  "exchange": null,
  "micCode": null,
  "type": null,
  "indicator": null,
} satisfies InlineObject17Meta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InlineObject17Meta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


