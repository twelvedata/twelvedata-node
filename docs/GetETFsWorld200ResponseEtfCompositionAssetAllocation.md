
# GetETFsWorld200ResponseEtfCompositionAssetAllocation

Asset allocation of a fund by different asset classes and their respective weights

## Properties

Name | Type
------------ | -------------
`cash` | number
`stocks` | number
`preferredStocks` | number
`convertables` | number
`bonds` | number
`others` | number

## Example

```typescript
import type { GetETFsWorld200ResponseEtfCompositionAssetAllocation } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "cash": null,
  "stocks": null,
  "preferredStocks": null,
  "convertables": null,
  "bonds": null,
  "others": null,
} satisfies GetETFsWorld200ResponseEtfCompositionAssetAllocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetETFsWorld200ResponseEtfCompositionAssetAllocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


