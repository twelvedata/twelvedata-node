
# IncomeStatementItemOtherIncomeAndExpenses

Other income and expenses information

## Properties

Name | Type
------------ | -------------
`otherIncomeExpense` | number
`otherNonOperatingIncomeExpenses` | number
`specialIncomeCharges` | number
`gainOnSaleOfPpe` | number
`gainOnSaleOfBusiness` | number
`gainOnSaleOfSecurity` | number
`otherSpecialCharges` | number
`writeOff` | number
`impairmentOfCapitalAssets` | number
`restructuringAndMergerAcquisition` | number
`securitiesAmortization` | number
`earningsFromEquityInterest` | number
`earningsFromEquityInterestNetOfTax` | number
`totalOtherFinanceCost` | number

## Example

```typescript
import type { IncomeStatementItemOtherIncomeAndExpenses } from '@twelvedata/twelvedata-node'

// TODO: Update the object below with actual values
const example = {
  "otherIncomeExpense": null,
  "otherNonOperatingIncomeExpenses": null,
  "specialIncomeCharges": null,
  "gainOnSaleOfPpe": null,
  "gainOnSaleOfBusiness": null,
  "gainOnSaleOfSecurity": null,
  "otherSpecialCharges": null,
  "writeOff": null,
  "impairmentOfCapitalAssets": null,
  "restructuringAndMergerAcquisition": null,
  "securitiesAmortization": null,
  "earningsFromEquityInterest": null,
  "earningsFromEquityInterestNetOfTax": null,
  "totalOtherFinanceCost": null,
} satisfies IncomeStatementItemOtherIncomeAndExpenses

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncomeStatementItemOtherIncomeAndExpenses
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


