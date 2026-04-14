
# GetSourceSanctionedEntities200Response


## Properties

Name | Type
------------ | -------------
`sanctions` | [Array&lt;ResponseSanctionedEntitiy&gt;](ResponseSanctionedEntitiy.md)
`count` | number
`status` | string

## Example

```typescript
import type { GetSourceSanctionedEntities200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "sanctions": null,
  "count": null,
  "status": null,
} satisfies GetSourceSanctionedEntities200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetSourceSanctionedEntities200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


