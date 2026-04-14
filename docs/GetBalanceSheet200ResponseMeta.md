
# GetBalanceSheet200ResponseMeta

Metadata about the balance sheet

## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`currency` | string
`exchange` | string
`micCode` | string
`exchangeTimezone` | string
`period` | string

## Example

```typescript
import type { GetBalanceSheet200ResponseMeta } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "currency": null,
  "exchange": null,
  "micCode": null,
  "exchangeTimezone": null,
  "period": null,
} satisfies GetBalanceSheet200ResponseMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


