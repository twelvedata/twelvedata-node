
# AssetsInfo

AssetsInfo represents assets information in the balance sheet

## Properties

Name | Type
------------ | -------------
`totalAssets` | number
`currentAssets` | [AssetsInfoCurrentAssets](AssetsInfoCurrentAssets.md)
`nonCurrentAssets` | [AssetsInfoNonCurrentAssets](AssetsInfoNonCurrentAssets.md)
`liabilities` | [AssetsInfoLiabilities](AssetsInfoLiabilities.md)

## Example

```typescript
import type { AssetsInfo } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "totalAssets": null,
  "currentAssets": null,
  "nonCurrentAssets": null,
  "liabilities": null,
} satisfies AssetsInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetsInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


