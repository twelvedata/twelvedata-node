
# GetStatistics200ResponseStatisticsDividendsAndSplits

Dividends and splits information of the company

## Properties

Name | Type
------------ | -------------
`forwardAnnualDividendRate` | number
`forwardAnnualDividendYield` | number
`trailingAnnualDividendRate` | number
`trailingAnnualDividendYield` | number
`_5yearAverageDividendYield` | number
`payoutRatio` | number
`dividendFrequency` | string
`dividendDate` | string
`exDividendDate` | string
`lastSplitFactor` | string
`lastSplitDate` | string

## Example

```typescript
import type { GetStatistics200ResponseStatisticsDividendsAndSplits } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "forwardAnnualDividendRate": null,
  "forwardAnnualDividendYield": null,
  "trailingAnnualDividendRate": null,
  "trailingAnnualDividendYield": null,
  "_5yearAverageDividendYield": null,
  "payoutRatio": null,
  "dividendFrequency": null,
  "dividendDate": null,
  "exDividendDate": null,
  "lastSplitFactor": null,
  "lastSplitDate": null,
} satisfies GetStatistics200ResponseStatisticsDividendsAndSplits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetStatistics200ResponseStatisticsDividendsAndSplits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


