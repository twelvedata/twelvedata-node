
# GetTimeSeriesCeil200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesCeil200ResponseMeta](GetTimeSeriesCeil200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesCeil200ResponseValuesInner&gt;](GetTimeSeriesCeil200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesCeil200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesCeil200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesCeil200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


