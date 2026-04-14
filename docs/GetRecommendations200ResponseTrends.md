
# GetRecommendations200ResponseTrends

Analyst recommendations trends

## Properties

Name | Type
------------ | -------------
`currentMonth` | [GetRecommendations200ResponseTrendsCurrentMonth](GetRecommendations200ResponseTrendsCurrentMonth.md)
`previousMonth` | [GetRecommendations200ResponseTrendsPreviousMonth](GetRecommendations200ResponseTrendsPreviousMonth.md)
`_2monthsAgo` | [GetRecommendations200ResponseTrends2MonthsAgo](GetRecommendations200ResponseTrends2MonthsAgo.md)
`_3monthsAgo` | [GetRecommendations200ResponseTrends3MonthsAgo](GetRecommendations200ResponseTrends3MonthsAgo.md)

## Example

```typescript
import type { GetRecommendations200ResponseTrends } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "currentMonth": null,
  "previousMonth": null,
  "_2monthsAgo": null,
  "_3monthsAgo": null,
} satisfies GetRecommendations200ResponseTrends

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetRecommendations200ResponseTrends
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


