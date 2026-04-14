
# AssetsInfoLiabilities

Liabilities information

## Properties

Name | Type
------------ | -------------
`totalLiabilitiesNetMinorityInterest` | number
`currentLiabilities` | [AssetsInfoLiabilitiesCurrentLiabilities](AssetsInfoLiabilitiesCurrentLiabilities.md)
`nonCurrentLiabilities` | [AssetsInfoLiabilitiesNonCurrentLiabilities](AssetsInfoLiabilitiesNonCurrentLiabilities.md)
`equity` | [EquityInfo](EquityInfo.md)

## Example

```typescript
import type { AssetsInfoLiabilities } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalLiabilitiesNetMinorityInterest": null,
  "currentLiabilities": null,
  "nonCurrentLiabilities": null,
  "equity": null,
} satisfies AssetsInfoLiabilities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsInfoLiabilities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


