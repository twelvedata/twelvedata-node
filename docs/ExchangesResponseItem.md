
# ExchangesResponseItem

ExchangesResponseItem represents details of an exchange

## Properties

Name | Type
------------ | -------------
`title` | string
`name` | string
`code` | string
`country` | string
`timezone` | string
`access` | [ExchangesResponseItemAccess](ExchangesResponseItemAccess.md)

## Example

```typescript
import type { ExchangesResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "name": null,
  "code": null,
  "country": null,
  "timezone": null,
  "access": null,
} satisfies ExchangesResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExchangesResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


