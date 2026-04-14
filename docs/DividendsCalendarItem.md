
# DividendsCalendarItem

DividendsCalendarItem represents details of a dividend

## Properties

Name | Type
------------ | -------------
`symbol` | string
`micCode` | string
`exchange` | string
`exDate` | string
`amount` | number

## Example

```typescript
import type { DividendsCalendarItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "micCode": null,
  "exchange": null,
  "exDate": null,
  "amount": null,
} satisfies DividendsCalendarItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DividendsCalendarItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


