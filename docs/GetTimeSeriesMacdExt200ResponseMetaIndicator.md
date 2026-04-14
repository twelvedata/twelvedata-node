
# GetTimeSeriesMacdExt200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type
------------ | -------------
`name` | string
`seriesType` | string
`fastPeriod` | number
`fastMaType` | string
`slowPeriod` | number
`slowMaType` | string
`signalPeriod` | number
`signalMaType` | string

## Example

```typescript
import type { GetTimeSeriesMacdExt200ResponseMetaIndicator } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "seriesType": null,
  "fastPeriod": null,
  "fastMaType": null,
  "slowPeriod": null,
  "slowMaType": null,
  "signalPeriod": null,
  "signalMaType": null,
} satisfies GetTimeSeriesMacdExt200ResponseMetaIndicator

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesMacdExt200ResponseMetaIndicator
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


