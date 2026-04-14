
# GetBalanceSheet200ResponseBalanceSheetInnerAssets

Assets section of the balance sheet

## Properties

Name | Type
------------ | -------------
`currentAssets` | [GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets](GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets.md)
`nonCurrentAssets` | [GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets](GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets.md)
`totalAssets` | number

## Example

```typescript
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssets } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "currentAssets": null,
  "nonCurrentAssets": null,
  "totalAssets": null,
} satisfies GetBalanceSheet200ResponseBalanceSheetInnerAssets

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseBalanceSheetInnerAssets
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


