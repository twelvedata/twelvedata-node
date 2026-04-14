
# GetEarningsCalendar200ResponseEarningsValueInner


## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`currency` | string
`exchange` | string
`micCode` | string
`country` | string
`time` | string
`epsEstimate` | number
`epsActual` | number
`difference` | number
`surprisePrc` | number

## Example

```typescript
import type { GetEarningsCalendar200ResponseEarningsValueInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
  "country": null,
  "time": null,
  "epsEstimate": null,
  "epsActual": null,
  "difference": null,
  "surprisePrc": null,
} satisfies GetEarningsCalendar200ResponseEarningsValueInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEarningsCalendar200ResponseEarningsValueInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


