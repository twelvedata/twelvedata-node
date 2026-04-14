
# GetEarningsCalendar200Response


## Properties

Name | Type
------------ | -------------
`earnings` | { [key: string]: Array&lt;GetEarningsCalendar200ResponseEarningsValueInner&gt;; }
`status` | string

## Example

```typescript
import type { GetEarningsCalendar200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "earnings": null,
  "status": null,
} satisfies GetEarningsCalendar200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetEarningsCalendar200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


