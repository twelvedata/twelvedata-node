
# GetTimeSeriesWillR200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetTimeSeriesWillR200ResponseMeta](GetTimeSeriesWillR200ResponseMeta.md)
`values` | [Array&lt;GetTimeSeriesWillR200ResponseValuesInner&gt;](GetTimeSeriesWillR200ResponseValuesInner.md)
`status` | string

## Example

```typescript
import type { GetTimeSeriesWillR200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "values": null,
  "status": null,
} satisfies GetTimeSeriesWillR200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetTimeSeriesWillR200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


