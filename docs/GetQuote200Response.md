
# GetQuote200Response


## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`exchange` | string
`micCode` | string
`currency` | string
`datetime` | string
`timestamp` | number
`lastQuoteAt` | number
`open` | string
`high` | string
`low` | string
`close` | string
`volume` | string
`previousClose` | string
`change` | string
`percentChange` | string
`averageVolume` | string
`rolling1dChange` | string
`rolling7dChange` | string
`rollingChange` | string
`isMarketOpen` | boolean
`fiftyTwoWeek` | [GetQuote200ResponseFiftyTwoWeek](GetQuote200ResponseFiftyTwoWeek.md)
`extendedChange` | string
`extendedPercentChange` | string
`extendedPrice` | string
`extendedTimestamp` | number

## Example

```typescript
import type { GetQuote200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "exchange": null,
  "micCode": null,
  "currency": null,
  "datetime": null,
  "timestamp": null,
  "lastQuoteAt": null,
  "open": null,
  "high": null,
  "low": null,
  "close": null,
  "volume": null,
  "previousClose": null,
  "change": null,
  "percentChange": null,
  "averageVolume": null,
  "rolling1dChange": null,
  "rolling7dChange": null,
  "rollingChange": null,
  "isMarketOpen": null,
  "fiftyTwoWeek": null,
  "extendedChange": null,
  "extendedPercentChange": null,
  "extendedPrice": null,
  "extendedTimestamp": null,
} satisfies GetQuote200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetQuote200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


