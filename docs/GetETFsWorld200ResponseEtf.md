
# GetETFsWorld200ResponseEtf

Etf information

## Properties

Name | Type
------------ | -------------
`summary` | [GetETFsWorld200ResponseEtfSummary](GetETFsWorld200ResponseEtfSummary.md)
`performance` | [GetETFsWorld200ResponseEtfPerformance](GetETFsWorld200ResponseEtfPerformance.md)
`risk` | [GetETFsWorld200ResponseEtfRisk](GetETFsWorld200ResponseEtfRisk.md)
`composition` | [GetETFsWorld200ResponseEtfComposition](GetETFsWorld200ResponseEtfComposition.md)

## Example

```typescript
import type { GetETFsWorld200ResponseEtf } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "summary": null,
  "performance": null,
  "risk": null,
  "composition": null,
} satisfies GetETFsWorld200ResponseEtf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetETFsWorld200ResponseEtf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


