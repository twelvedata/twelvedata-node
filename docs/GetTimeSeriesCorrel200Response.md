
# GetTimeSeriesCorrel200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesCorrel200ResponseMeta](GetTimeSeriesCorrel200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesCorrel200ResponseValuesInner&gt;](GetTimeSeriesCorrel200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesCorrel200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesCorrel200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesCorrel200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


