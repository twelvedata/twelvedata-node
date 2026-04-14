
# GetStatistics200ResponseStatisticsFinancialsBalanceSheet

Balance sheet information

## Properties

Name | Type
------------ | -------------
`totalCashMrq` | number
`totalCashPerShareMrq` | number
`totalDebtMrq` | number
`totalDebtToEquityMrq` | number
`currentRatioMrq` | number
`bookValuePerShareMrq` | number

## Example

```typescript
import type { GetStatistics200ResponseStatisticsFinancialsBalanceSheet } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalCashMrq": null,
  "totalCashPerShareMrq": null,
  "totalDebtMrq": null,
  "totalDebtToEquityMrq": null,
  "currentRatioMrq": null,
  "bookValuePerShareMrq": null,
} satisfies GetStatistics200ResponseStatisticsFinancialsBalanceSheet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsFinancialsBalanceSheet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


