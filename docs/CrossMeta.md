
# CrossMeta

Json object with request general information

## Properties

Name | Type
------------ | -------------
`baseInstrument` | string
`baseCurrency` | string
`baseExchange` | string
`interval` | string
`quoteInstrument` | string
`quoteCurrency` | string
`quoteExchange` | string

## Example

```typescript
import type { CrossMeta } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "baseInstrument": null,
  "baseCurrency": null,
  "baseExchange": null,
  "interval": null,
  "quoteInstrument": null,
  "quoteCurrency": null,
  "quoteExchange": null,
} satisfies CrossMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrossMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


