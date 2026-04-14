
# MarketStateResponseItem


## Properties

Name | Type
------------ | -------------
`name` | string
`code` | string
`country` | string
`isMarketOpen` | boolean
`timeAfterOpen` | string
`timeToOpen` | string
`timeToClose` | string

## Example

```typescript
import type { MarketStateResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "code": null,
  "country": null,
  "isMarketOpen": null,
  "timeAfterOpen": null,
  "timeToOpen": null,
  "timeToClose": null,
} satisfies MarketStateResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketStateResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


