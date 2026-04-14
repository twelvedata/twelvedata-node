
# GetTimeSeriesRsi200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesRsi200ResponseMeta](GetTimeSeriesRsi200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesRsi200ResponseValuesInner&gt;](GetTimeSeriesRsi200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesRsi200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesRsi200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesRsi200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


