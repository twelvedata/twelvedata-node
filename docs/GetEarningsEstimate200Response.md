
# GetEarningsEstimate200Response


## Properties

Name | Type
------------ | -------------
`meta` | [GetEarningsEstimate200ResponseMeta](GetEarningsEstimate200ResponseMeta.md)
`earningsEstimate` | [Array&lt;GetEarningsEstimate200ResponseEarningsEstimateInner&gt;](GetEarningsEstimate200ResponseEarningsEstimateInner.md)
`status` | string

## Example

```typescript
import type { GetEarningsEstimate200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "earningsEstimate": null,
  "status": null,
} satisfies GetEarningsEstimate200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEarningsEstimate200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


