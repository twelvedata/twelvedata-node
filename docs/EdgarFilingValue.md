
# EdgarFilingValue

Filing value object

## Properties

Name | Type
------------ | -------------
`cik` | number
`filedAt` | number
`files` | [Array&lt;EdgarFilingFile&gt;](EdgarFilingFile.md)
`filingUrl` | string
`formType` | string
`ticker` | Array&lt;string&gt;

## Example

```typescript
import type { EdgarFilingValue } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "cik": null,
  "filedAt": null,
  "files": null,
  "filingUrl": null,
  "formType": null,
  "ticker": null,
} satisfies EdgarFilingValue

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EdgarFilingValue
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


