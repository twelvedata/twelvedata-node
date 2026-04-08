# GetStatistics200ResponseStatisticsValuationsMetrics

Valuation metrics of the company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketCapitalization** | **number** | Refers to the market value of the company\&#39;s outstanding shares | [optional] [default to undefined]
**enterpriseValue** | **number** | Refers to enterprise value (EV) of the company, often used as a more comprehensive alternative to market capitalization | [optional] [default to undefined]
**trailingPe** | **number** | Refers to the trailing price-to-earnings (P/E). It is calculated by taking the current stock price and dividing it by the trailing earnings per share (EPS) for the past 12 months | [optional] [default to undefined]
**forwardPe** | **number** | Refers to the forward price-to-earnings ratio. It is calculated by dividing the current share price by the estimated future earnings per share | [optional] [default to undefined]
**pegRatio** | **number** | The price/earnings to growth (PEG) ratio is a price-to-earnings ratio divided by the growth rate of the earnings | [optional] [default to undefined]
**priceToSalesTtm** | **number** | The price-to-sales (P/S) ratio is a valuation ratio that compares the market capitalization to its revenues over the last 12 months | [optional] [default to undefined]
**priceToBookMrq** | **number** | The price-to-book (P/B) ratio is equal to the current share price divided by the book value of all shares (BVPS) over the last quarter | [optional] [default to undefined]
**enterpriseToRevenue** | **number** | The enterprise value-to-revenue multiple (EV/R) is a measure that compares enterprise value to revenue | [optional] [default to undefined]
**enterpriseToEbitda** | **number** | The enterprise value-to-ebitda multiple (EV/EBITDA) is a measure that compares enterprise value to EBITDA | [optional] [default to undefined]

## Example

```typescript
import { GetStatistics200ResponseStatisticsValuationsMetrics } from '@twelvedata/twelvedata-node';

const instance: GetStatistics200ResponseStatisticsValuationsMetrics = {
    marketCapitalization,
    enterpriseValue,
    trailingPe,
    forwardPe,
    pegRatio,
    priceToSalesTtm,
    priceToBookMrq,
    enterpriseToRevenue,
    enterpriseToEbitda,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
