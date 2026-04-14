
# IncomeStatementItemDividendsAndShares

Dividends and shares information

## Properties

Name | Type
------------ | -------------
`dividendPerShare` | number
`dilutedAverageShares` | number
`basicAverageShares` | number
`preferredStockDividends` | number
`otherUnderPreferredStockDividend` | number

## Example

```typescript
import type { IncomeStatementItemDividendsAndShares } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "dividendPerShare": null,
  "dilutedAverageShares": null,
  "basicAverageShares": null,
  "preferredStockDividends": null,
  "otherUnderPreferredStockDividend": null,
} satisfies IncomeStatementItemDividendsAndShares

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemDividendsAndShares
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


