# GetStatistics200ResponseStatisticsFinancialsIncomeStatement

Income statement information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revenueTtm** | **number** | Refers to total revenue over the last 12 months | [optional] [default to undefined]
**revenuePerShareTtm** | **number** | Refers to revenue per share over the last 12 months | [optional] [default to undefined]
**quarterlyRevenueGrowth** | **number** | Refers to quarterly revenue growth year over year | [optional] [default to undefined]
**grossProfitTtm** | **number** | Refers to gross profit over the last 12 months | [optional] [default to undefined]
**ebitda** | **number** | Refers to EBITDA (earnings before interest, taxes, depreciation, and amortization) measure; EBITDA is not calculated for banks | [optional] [default to undefined]
**netIncomeToCommonTtm** | **number** | Refers to net income applicable to common shares over the last 12 months | [optional] [default to undefined]
**dilutedEpsTtm** | **number** | Refers to diluted EPS measure over the last 12 months | [optional] [default to undefined]
**quarterlyEarningsGrowthYoy** | **number** | Refers to quarterly earnings growth year over year | [optional] [default to undefined]

## Example

```typescript
import { GetStatistics200ResponseStatisticsFinancialsIncomeStatement } from '@twelvedata/twelvedata-node';

const instance: GetStatistics200ResponseStatisticsFinancialsIncomeStatement = {
    revenueTtm,
    revenuePerShareTtm,
    quarterlyRevenueGrowth,
    grossProfitTtm,
    ebitda,
    netIncomeToCommonTtm,
    dilutedEpsTtm,
    quarterlyEarningsGrowthYoy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
