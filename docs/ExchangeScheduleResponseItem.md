
# ExchangeScheduleResponseItem

ExchangeScheduleResponseItem represents details of an exchange schedule

## Properties

Name | Type
------------ | -------------
`title` | string
`name` | string
`code` | string
`country` | string
`timeZone` | string
`sessions` | [Array&lt;ExchangeScheduleSession&gt;](ExchangeScheduleSession.md)

## Example

```typescript
import type { ExchangeScheduleResponseItem } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "name": null,
  "code": null,
  "country": null,
  "timeZone": null,
  "sessions": null,
} satisfies ExchangeScheduleResponseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExchangeScheduleResponseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


