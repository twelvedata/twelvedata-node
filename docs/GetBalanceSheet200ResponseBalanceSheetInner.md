
# GetBalanceSheet200ResponseBalanceSheetInner


## Properties

Name | Type
------------ | -------------
`fiscalDate` | string
`year` | number
`assets` | [GetBalanceSheet200ResponseBalanceSheetInnerAssets](GetBalanceSheet200ResponseBalanceSheetInnerAssets.md)
`liabilities` | [GetBalanceSheet200ResponseBalanceSheetInnerLiabilities](GetBalanceSheet200ResponseBalanceSheetInnerLiabilities.md)
`shareholdersEquity` | [GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity](GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity.md)

## Example

```typescript
import type { GetBalanceSheet200ResponseBalanceSheetInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "fiscalDate": null,
  "year": null,
  "assets": null,
  "liabilities": null,
  "shareholdersEquity": null,
} satisfies GetBalanceSheet200ResponseBalanceSheetInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseBalanceSheetInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


