
# GetTimeSeriesWclPrice200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesWclPrice200ResponseMeta](GetTimeSeriesWclPrice200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesWclPrice200ResponseValuesInner&gt;](GetTimeSeriesWclPrice200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesWclPrice200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesWclPrice200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesWclPrice200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


