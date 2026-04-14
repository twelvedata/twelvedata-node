
# GetTimeSeriesBeta200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesBeta200ResponseMeta](GetTimeSeriesBeta200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesBeta200ResponseValuesInner&gt;](GetTimeSeriesBeta200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesBeta200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesBeta200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesBeta200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


