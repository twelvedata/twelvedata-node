
# GetTimeSeriesPpo200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesPpo200ResponseMeta](GetTimeSeriesPpo200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesPpo200ResponseValuesInner&gt;](GetTimeSeriesPpo200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesPpo200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesPpo200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesPpo200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


