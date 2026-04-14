
# GetBalanceSheet200ResponseBalanceSheetInnerLiabilities

Liabilities section of the balance sheet

## Properties

Name | Type
------------ | -------------
`currentLiabilities` | [GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities](GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesCurrentLiabilities.md)
`nonCurrentLiabilities` | [GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities](GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesNonCurrentLiabilities.md)
`totalLiabilities` | number

## Example

```typescript
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "currentLiabilities": null,
  "nonCurrentLiabilities": null,
  "totalLiabilities": null,
} satisfies GetBalanceSheet200ResponseBalanceSheetInnerLiabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseBalanceSheetInnerLiabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


