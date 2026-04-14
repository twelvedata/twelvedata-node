
# CountryResponseItem

CountryResponseItem represents details of a country

## Properties

Name | Type
------------ | -------------
`iso2` | string
`iso3` | string
`numeric` | string
`name` | string
`officialName` | string
`capital` | string
`currency` | string

## Example

```typescript
import type { CountryResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "iso2": null,
  "iso3": null,
  "numeric": null,
  "name": null,
  "officialName": null,
  "capital": null,
  "currency": null,
} satisfies CountryResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CountryResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


