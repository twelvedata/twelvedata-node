
# SplitsCalendarResponseItem

List of stock splits

## Properties

Name | Type
------------ | -------------
`date` | string
`symbol` | string
`micCode` | string
`exchange` | string
`description` | string
`ratio` | number
`fromFactor` | number
`toFactor` | number

## Example

```typescript
import type { SplitsCalendarResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "symbol": null,
  "micCode": null,
  "exchange": null,
  "description": null,
  "ratio": null,
  "fromFactor": null,
  "toFactor": null,
} satisfies SplitsCalendarResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SplitsCalendarResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


