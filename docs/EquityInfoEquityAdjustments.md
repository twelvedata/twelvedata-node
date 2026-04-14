
# EquityInfoEquityAdjustments

Equity adjustments information

## Properties

Name | Type
------------ | -------------
`gainsLossesNotAffectingRetainedEarnings` | number
`otherEquityAdjustments` | number
`fixedAssetsRevaluationReserve` | number
`foreignCurrencyTranslationAdjustments` | number
`minimumPensionLiabilities` | number
`unrealizedGainLoss` | number

## Example

```typescript
import type { EquityInfoEquityAdjustments } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "gainsLossesNotAffectingRetainedEarnings": null,
  "otherEquityAdjustments": null,
  "fixedAssetsRevaluationReserve": null,
  "foreignCurrencyTranslationAdjustments": null,
  "minimumPensionLiabilities": null,
  "unrealizedGainLoss": null,
} satisfies EquityInfoEquityAdjustments

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EquityInfoEquityAdjustments
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


