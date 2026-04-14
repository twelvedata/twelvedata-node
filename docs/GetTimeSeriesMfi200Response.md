
# GetTimeSeriesMfi200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesMfi200ResponseMeta](GetTimeSeriesMfi200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesMfi200ResponseValuesInner&gt;](GetTimeSeriesMfi200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesMfi200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesMfi200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesMfi200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


