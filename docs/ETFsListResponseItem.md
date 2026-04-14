
# ETFsListResponseItem


## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`country` | string
`micCode` | string
`fundFamily` | string
`fundType` | string

## Example

```typescript
import type { ETFsListResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "country": null,
  "micCode": null,
  "fundFamily": null,
  "fundType": null,
} satisfies ETFsListResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ETFsListResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


