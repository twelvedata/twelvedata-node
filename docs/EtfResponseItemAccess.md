
# EtfResponseItemAccess

Info on which plan symbol is available (displayed then `show_plan` is `true`)

## Properties

Name | Type
------------ | -------------
`global` | string
`plan` | string
`planBusiness` | string

## Example

```typescript
import type { EtfResponseItemAccess } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "global": null,
  "plan": null,
  "planBusiness": null,
} satisfies EtfResponseItemAccess

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EtfResponseItemAccess
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


