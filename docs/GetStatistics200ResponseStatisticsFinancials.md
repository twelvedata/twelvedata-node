# GetStatistics200ResponseStatisticsFinancials

Financial information of the company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiscalYearEnds** | **string** | Refers to the completion of the last 12-month accounting period | [optional] [default to undefined]
**mostRecentQuarter** | **string** | The most recent quarter (MRQ) refers to the fiscal quarter that most recently ended | [optional] [default to undefined]
**grossMargin** | **number** | The portion of a company\&#39;s revenue left over after direct costs are subtracted | [optional] [default to undefined]
**profitMargin** | **number** | Refers to gross profit margin. Calculated by dividing net income by sales revenue | [optional] [default to undefined]
**operatingMargin** | **number** | Operating margin is calculated by dividing operating income by net sales | [optional] [default to undefined]
**returnOnAssetsTtm** | **number** | Return on assets (ROA) is calculated by dividing net income by total assets | [optional] [default to undefined]
**returnOnEquityTtm** | **number** | Return on equity (ROE) is calculated by dividing net income by average shareholders\&#39; equity | [optional] [default to undefined]
**incomeStatement** | [**GetStatistics200ResponseStatisticsFinancialsIncomeStatement**](GetStatistics200ResponseStatisticsFinancialsIncomeStatement.md) |  | [optional] [default to undefined]
**balanceSheet** | [**GetStatistics200ResponseStatisticsFinancialsBalanceSheet**](GetStatistics200ResponseStatisticsFinancialsBalanceSheet.md) |  | [optional] [default to undefined]
**cashFlow** | [**GetStatistics200ResponseStatisticsFinancialsCashFlow**](GetStatistics200ResponseStatisticsFinancialsCashFlow.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetStatistics200ResponseStatisticsFinancials } from '@twelvedata/twelvedata-node';

const instance: GetStatistics200ResponseStatisticsFinancials = {
    fiscalYearEnds,
    mostRecentQuarter,
    grossMargin,
    profitMargin,
    operatingMargin,
    returnOnAssetsTtm,
    returnOnEquityTtm,
    incomeStatement,
    balanceSheet,
    cashFlow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
