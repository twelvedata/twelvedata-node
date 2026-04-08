# GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing

Pricing information for the mutual fund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nav** | **number** | Net Asset Value: fund value minus liabilities | [optional] [default to undefined]
**_12monthLow** | **number** | Lowest price of the fund over the last year | [optional] [default to undefined]
**_12monthHigh** | **number** | Highest price of the fund over the last year | [optional] [default to undefined]
**lastMonth** | **number** | Fund price at the end of the last month | [optional] [default to undefined]

## Example

```typescript
import { GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing } from '@twelvedata/twelvedata-node';

const instance: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing = {
    nav,
    _12monthLow,
    _12monthHigh,
    lastMonth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
