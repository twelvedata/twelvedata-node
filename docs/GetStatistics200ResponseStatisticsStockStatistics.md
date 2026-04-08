# GetStatistics200ResponseStatisticsStockStatistics

Stock statistics of the company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sharesOutstanding** | **number** | Refers for the shares outstanding currently held by all its shareholders | [optional] [default to undefined]
**floatShares** | **number** | Refers to floating stock is the number of public shares a company has available for trading on the open market | [optional] [default to undefined]
**avg10Volume** | **number** | Refers to the average 10 days volume | [optional] [default to undefined]
**avg90Volume** | **number** | Refers to the average 90 days volume | [optional] [default to undefined]
**sharesShort** | **number** | Refers to the number of shares that have been shorted | [optional] [default to undefined]
**shortRatio** | **number** | Refers to short ratio measure | [optional] [default to undefined]
**shortPercentOfSharesOutstanding** | **number** | Refers to the number of shorted shares divided by the number of shares outstanding | [optional] [default to undefined]
**percentHeldByInsiders** | **number** | Refers to the percentage of shares held by the company insiders | [optional] [default to undefined]
**percentHeldByInstitutions** | **number** | Refers to the percentage of shares held by the institutions | [optional] [default to undefined]

## Example

```typescript
import { GetStatistics200ResponseStatisticsStockStatistics } from '@twelvedata/twelvedata-node';

const instance: GetStatistics200ResponseStatisticsStockStatistics = {
    sharesOutstanding,
    floatShares,
    avg10Volume,
    avg90Volume,
    sharesShort,
    shortRatio,
    shortPercentOfSharesOutstanding,
    percentHeldByInsiders,
    percentHeldByInstitutions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
