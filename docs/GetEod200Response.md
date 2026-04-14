
# GetEod200Response


## Properties

Name | Type
------------ | -------------
`symbol` | string
`exchange` | string
`micCode` | string
`currency` | string
`datetime` | string
`close` | string

## Example

```typescript
import type { GetEod200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "exchange": null,
  "micCode": null,
  "currency": null,
  "datetime": null,
  "close": null,
} satisfies GetEod200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEod200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


