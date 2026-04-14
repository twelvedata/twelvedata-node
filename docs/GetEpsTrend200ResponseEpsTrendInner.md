
# GetEpsTrend200ResponseEpsTrendInner


## Properties

Name | Type
------------ | -------------
`date` | string
`period` | string
`currentEstimate` | number
`_7daysAgo` | number
`_30daysAgo` | number
`_60daysAgo` | number
`_90daysAgo` | number

## Example

```typescript
import type { GetEpsTrend200ResponseEpsTrendInner } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "period": null,
  "currentEstimate": null,
  "_7daysAgo": null,
  "_30daysAgo": null,
  "_60daysAgo": null,
  "_90daysAgo": null,
} satisfies GetEpsTrend200ResponseEpsTrendInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEpsTrend200ResponseEpsTrendInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


