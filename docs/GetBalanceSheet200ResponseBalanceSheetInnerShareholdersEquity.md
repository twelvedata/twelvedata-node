
# GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity

Shareholders\' equity section of the balance sheet

## Properties

Name | Type
------------ | -------------
`commonStock` | number
`retainedEarnings` | number
`otherShareholdersEquity` | number
`totalShareholdersEquity` | number
`additionalPaidInCapital` | number
`treasuryStock` | number
`minorityInterest` | number

## Example

```typescript
import type { GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "commonStock": null,
  "retainedEarnings": null,
  "otherShareholdersEquity": null,
  "totalShareholdersEquity": null,
  "additionalPaidInCapital": null,
  "treasuryStock": null,
  "minorityInterest": null,
} satisfies GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


