
# PressReleasesListParameters200Response


## Properties

Name | Type
------------ | -------------
`pressReleases` | [Array&lt;PressRelease&gt;](PressRelease.md)
`status` | string

## Example

```typescript
import type { PressReleasesListParameters200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "pressReleases": null,
  "status": null,
} satisfies PressReleasesListParameters200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PressReleasesListParameters200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


