
# GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities

Current liabilities section

## Properties

Name | Type
------------ | -------------
`accountsPayable` | number
`accruedExpenses` | number
`shortTermDebt` | number
`deferredRevenue` | number
`taxPayable` | number
`pensions` | number
`otherCurrentLiabilities` | number
`totalCurrentLiabilities` | number

## Example

```typescript
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "accountsPayable": null,
  "accruedExpenses": null,
  "shortTermDebt": null,
  "deferredRevenue": null,
  "taxPayable": null,
  "pensions": null,
  "otherCurrentLiabilities": null,
  "totalCurrentLiabilities": null,
} satisfies GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


