
# GetApiUsage200Response


## Properties

Name | Type
------------ | -------------
`timestamp` | string
`currentUsage` | number
`planLimit` | number
`dailyUsage` | number
`planDailyLimit` | number
`planCategory` | string

## Example

```typescript
import type { GetApiUsage200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "timestamp": null,
  "currentUsage": null,
  "planLimit": null,
  "dailyUsage": null,
  "planDailyLimit": null,
  "planCategory": null,
} satisfies GetApiUsage200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetApiUsage200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


