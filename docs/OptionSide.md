
# OptionSide


## Properties

Name | Type
------------ | -------------
`ask` | number
`bid` | number
`change` | number
`contractName` | string
`impliedVolatility` | number
`inTheMoney` | boolean
`lastPrice` | number
`lastTradeDate` | string
`openInterest` | number
`optionId` | string
`percentChange` | number
`strike` | number
`volume` | number

## Example

```typescript
import type { OptionSide } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "ask": null,
  "bid": null,
  "change": null,
  "contractName": null,
  "impliedVolatility": null,
  "inTheMoney": null,
  "lastPrice": null,
  "lastTradeDate": null,
  "openInterest": null,
  "optionId": null,
  "percentChange": null,
  "strike": null,
  "volume": null,
} satisfies OptionSide

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OptionSide
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


