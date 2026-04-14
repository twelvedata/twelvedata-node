
# MarketMoversResponseValue


## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`exchange` | string
`micCode` | string
`datetime` | string
`last` | number
`high` | number
`low` | number
`volume` | number
`change` | number
`percentChange` | number

## Example

```typescript
import type { MarketMoversResponseValue } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "exchange": null,
  "micCode": null,
  "datetime": null,
  "last": null,
  "high": null,
  "low": null,
  "volume": null,
  "change": null,
  "percentChange": null,
} satisfies MarketMoversResponseValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketMoversResponseValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


