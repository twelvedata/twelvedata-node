
# GetTimeSeriesCoppock200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesCoppock200ResponseMeta](GetTimeSeriesCoppock200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesCoppock200ResponseValuesInner&gt;](GetTimeSeriesCoppock200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesCoppock200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesCoppock200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesCoppock200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


