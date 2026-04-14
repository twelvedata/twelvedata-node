
# EarningsItem


## Properties

Name | Type
------------ | -------------
`date` | string
`time` | string
`epsEstimate` | number
`epsActual` | number
`difference` | number
`surprisePrc` | number

## Example

```typescript
import type { EarningsItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "time": null,
  "epsEstimate": null,
  "epsActual": null,
  "difference": null,
  "surprisePrc": null,
} satisfies EarningsItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EarningsItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


