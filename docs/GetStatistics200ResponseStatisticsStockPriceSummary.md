# GetStatistics200ResponseStatisticsStockPriceSummary

Stock price summary of the company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiftyTwoWeekLow** | **number** | Refers to the lowest price at which stock traded during a year | [optional] [default to undefined]
**fiftyTwoWeekHigh** | **number** | Refers to the highest price at which stock traded during a year | [optional] [default to undefined]
**fiftyTwoWeekChange** | **number** | Refers to the change between lowest and highest prices during a year | [optional] [default to undefined]
**beta** | **number** | Refers to beta measure relative to the primary benchmark (index) of the country | [optional] [default to undefined]
**day50Ma** | **number** | Refers to the 50-day simple moving average | [optional] [default to undefined]
**day200Ma** | **number** | Refers to the 200-day simple moving average | [optional] [default to undefined]

## Example

```typescript
import { GetStatistics200ResponseStatisticsStockPriceSummary } from '@twelvedata/twelvedata-node';

const instance: GetStatistics200ResponseStatisticsStockPriceSummary = {
    fiftyTwoWeekLow,
    fiftyTwoWeekHigh,
    fiftyTwoWeekChange,
    beta,
    day50Ma,
    day200Ma,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
