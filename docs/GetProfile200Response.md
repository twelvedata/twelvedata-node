
# GetProfile200Response


## Properties

Name | Type
------------ | -------------
`symbol` | string
`name` | string
`exchange` | string
`micCode` | string
`sector` | string
`industry` | string
`employees` | number
`website` | string
`description` | string
`type` | string
`cEO` | string
`address` | string
`address2` | string
`city` | string
`zip` | string
`state` | string
`country` | string
`phone` | string

## Example

```typescript
import type { GetProfile200Response } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "name": null,
  "exchange": null,
  "micCode": null,
  "sector": null,
  "industry": null,
  "employees": null,
  "website": null,
  "description": null,
  "type": null,
  "cEO": null,
  "address": null,
  "address2": null,
  "city": null,
  "zip": null,
  "state": null,
  "country": null,
  "phone": null,
} satisfies GetProfile200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetProfile200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


