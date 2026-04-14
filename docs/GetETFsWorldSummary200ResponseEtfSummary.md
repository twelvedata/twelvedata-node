
# GetETFsWorldSummary200ResponseEtfSummary

A brief summary of a ETF

## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`fundFamily` | string
`fundType` | string
`currency` | string
`shareClassInceptionDate` | string
`ytdReturn` | number
`expenseRatioNet` | number
`_yield` | number
`nav` | number
`lastPrice` | number
`turnoverRate` | number
`netAssets` | number
`overview` | string

## Example

```typescript
import type { GetETFsWorldSummary200ResponseEtfSummary } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "fundFamily": null,
  "fundType": null,
  "currency": null,
  "shareClassInceptionDate": null,
  "ytdReturn": null,
  "expenseRatioNet": null,
  "_yield": null,
  "nav": null,
  "lastPrice": null,
  "turnoverRate": null,
  "netAssets": null,
  "overview": null,
} satisfies GetETFsWorldSummary200ResponseEtfSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetETFsWorldSummary200ResponseEtfSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


