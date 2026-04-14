
# TechnicalIndicatorsResponseMacdParameter

Input parameter name. Example values: <code>series_type</code>, <code>fast_period</code>, <code>slow_period</code>, <code>time_period</code>, <code>signal_period</code>

## Properties

Name | Type
------------ | -------------
`_default` | number
`maxRange` | number
`minRange` | number
`range` | Array&lt;string&gt;
`type` | string

## Example

```typescript
import type { TechnicalIndicatorsResponseMacdParameter } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "_default": null,
  "maxRange": null,
  "minRange": null,
  "range": null,
  "type": null,
} satisfies TechnicalIndicatorsResponseMacdParameter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TechnicalIndicatorsResponseMacdParameter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


