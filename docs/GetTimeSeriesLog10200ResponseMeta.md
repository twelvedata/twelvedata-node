
# GetTimeSeriesLog10200ResponseMeta

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
`indicator` | [GetTimeSeriesLog10200ResponseMetaIndicator](GetTimeSeriesLog10200ResponseMetaIndicator.md)

## Example

```typescript
import type { GetTimeSeriesLog10200ResponseMeta } from '@twelvedata/twelvedata-node'

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
} satisfies GetTimeSeriesLog10200ResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesLog10200ResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


