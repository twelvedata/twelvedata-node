
# GetTimeSeriesT3ma200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesT3ma200ResponseMeta](GetTimeSeriesT3ma200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesT3ma200ResponseValuesInner&gt;](GetTimeSeriesT3ma200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesT3ma200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesT3ma200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesT3ma200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


