
# TimeSeriesCrossItem

TimeSeriesCrossItem represents a single data point in the time series

## Properties

Name | Type
------------ | -------------
`datetime` | string
`open` | string
`high` | string
`low` | string
`close` | string

## Example

```typescript
import type { TimeSeriesCrossItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "datetime": null,
  "open": null,
  "high": null,
  "low": null,
  "close": null,
} satisfies TimeSeriesCrossItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimeSeriesCrossItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


