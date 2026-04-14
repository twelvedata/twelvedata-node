
# EquityInfo

EquityInfo represents equity information

## Properties

Name | Type
------------ | -------------
`totalEquityGrossMinorityInterest` | number
`stockholdersEquity` | number
`commonStockEquity` | number
`preferredStockEquity` | number
`otherEquityInterest` | number
`minorityInterest` | number
`totalCapitalization` | number
`netTangibleAssets` | number
`tangibleBookValue` | number
`investedCapital` | number
`workingCapital` | number
`capitalStock` | [EquityInfoCapitalStock](EquityInfoCapitalStock.md)
`equityAdjustments` | [EquityInfoEquityAdjustments](EquityInfoEquityAdjustments.md)
`netDebt` | number
`totalDebt` | number

## Example

```typescript
import type { EquityInfo } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalEquityGrossMinorityInterest": null,
  "stockholdersEquity": null,
  "commonStockEquity": null,
  "preferredStockEquity": null,
  "otherEquityInterest": null,
  "minorityInterest": null,
  "totalCapitalization": null,
  "netTangibleAssets": null,
  "tangibleBookValue": null,
  "investedCapital": null,
  "workingCapital": null,
  "capitalStock": null,
  "equityAdjustments": null,
  "netDebt": null,
  "totalDebt": null,
} satisfies EquityInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquityInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


