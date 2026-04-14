
# GetTimeSeriesIchimoku200ResponseValuesInner


## Properties

Name | Type
------------ | -------------
`datetime` | string
`tenkanSen` | string
`kijunSen` | string
`senkouSpanA` | string
`senkouSpanB` | string
`chikouSpan` | string

## Example

```typescript
import type { GetTimeSeriesIchimoku200ResponseValuesInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "datetime": null,
  "tenkanSen": null,
  "kijunSen": null,
  "senkouSpanA": null,
  "senkouSpanB": null,
  "chikouSpan": null,
} satisfies GetTimeSeriesIchimoku200ResponseValuesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesIchimoku200ResponseValuesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


