
# TechnicalIndicatorsResponseMacdOutputValue

Output parameter name. Example values: <code>ad</code>, <code>add</code>, <code>adxr</code>, <code>aroonosc</code>,  <code>macd</code>, <code>macd_signal</code>, <code>macd_hist</code>, etc

## Properties

Name | Type
------------ | -------------
`defaultColor` | string
`display` | string
`minRange` | number
`maxRange` | number

## Example

```typescript
import type { TechnicalIndicatorsResponseMacdOutputValue } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "defaultColor": null,
  "display": null,
  "minRange": null,
  "maxRange": null,
} satisfies TechnicalIndicatorsResponseMacdOutputValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TechnicalIndicatorsResponseMacdOutputValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


