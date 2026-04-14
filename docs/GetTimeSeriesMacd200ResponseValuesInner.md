
# GetTimeSeriesMacd200ResponseValuesInner


## Properties

Name | Type
------------ | -------------
`datetime` | string
`macd` | string
`macdSignal` | string
`macdHist` | string

## Example

```typescript
import type { GetTimeSeriesMacd200ResponseValuesInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "datetime": null,
  "macd": null,
  "macdSignal": null,
  "macdHist": null,
} satisfies GetTimeSeriesMacd200ResponseValuesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesMacd200ResponseValuesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


