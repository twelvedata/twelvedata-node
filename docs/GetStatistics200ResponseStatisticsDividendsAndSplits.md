# GetStatistics200ResponseStatisticsDividendsAndSplits

Dividends and splits information of the company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwardAnnualDividendRate** | **number** | Refers to the forward dividend yield estimation in the currency of instrument | [optional] [default to undefined]
**forwardAnnualDividendYield** | **number** | Refers to the forward dividend yield percentage relative to stock price | [optional] [default to undefined]
**trailingAnnualDividendRate** | **number** | Refers to the trailing dividend yield rate in the currency of instrument over the last 12 months | [optional] [default to undefined]
**trailingAnnualDividendYield** | **number** | Refers to the trailing dividend yield percentage relative to stock price | [optional] [default to undefined]
**_5yearAverageDividendYield** | **number** | Refers to the average 5 years dividend yield | [optional] [default to undefined]
**payoutRatio** | **number** | Refers to payout ratio, showing the proportion of earnings a company pays its shareholders in the form of dividends | [optional] [default to undefined]
**dividendFrequency** | **string** | Refers to how often a stock or fund pays dividends | [optional] [default to undefined]
**dividendDate** | **string** | Refers to the last dividend payout date | [optional] [default to undefined]
**exDividendDate** | **string** | Refers to the last ex-dividend payout date | [optional] [default to undefined]
**lastSplitFactor** | **string** | Specification of the last split event | [optional] [default to undefined]
**lastSplitDate** | **string** | Refers for the last split date | [optional] [default to undefined]

## Example

```typescript
import { GetStatistics200ResponseStatisticsDividendsAndSplits } from '@twelvedata/twelvedata-node';

const instance: GetStatistics200ResponseStatisticsDividendsAndSplits = {
    forwardAnnualDividendRate,
    forwardAnnualDividendYield,
    trailingAnnualDividendRate,
    trailingAnnualDividendYield,
    _5yearAverageDividendYield,
    payoutRatio,
    dividendFrequency,
    dividendDate,
    exDividendDate,
    lastSplitFactor,
    lastSplitDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
