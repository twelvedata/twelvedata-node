
# PressRelease


## Properties

Name | Type
------------ | -------------
`id` | string
`datetime` | string
`title` | string
`body` | string
`style` | string
`language` | Array&lt;string&gt;

## Example

```typescript
import type { PressRelease } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "datetime": null,
  "title": null,
  "body": null,
  "style": null,
  "language": null,
} satisfies PressRelease

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PressRelease
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


