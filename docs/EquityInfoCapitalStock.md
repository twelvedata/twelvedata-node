
# EquityInfoCapitalStock

Capital stock information

## Properties

Name | Type
------------ | -------------
`commonStock` | number
`preferredStock` | number
`totalPartnershipCapital` | number
`generalPartnershipCapital` | number
`limitedPartnershipCapital` | number
`capitalStock` | number
`otherCapitalStock` | number
`additionalPaidInCapital` | number
`retainedEarnings` | number
`treasuryStock` | number
`treasurySharesNumber` | number
`ordinarySharesNumber` | number
`preferredSharesNumber` | number
`shareIssued` | number

## Example

```typescript
import type { EquityInfoCapitalStock } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "commonStock": null,
  "preferredStock": null,
  "totalPartnershipCapital": null,
  "generalPartnershipCapital": null,
  "limitedPartnershipCapital": null,
  "capitalStock": null,
  "otherCapitalStock": null,
  "additionalPaidInCapital": null,
  "retainedEarnings": null,
  "treasuryStock": null,
  "treasurySharesNumber": null,
  "ordinarySharesNumber": null,
  "preferredSharesNumber": null,
  "shareIssued": null,
} satisfies EquityInfoCapitalStock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquityInfoCapitalStock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


