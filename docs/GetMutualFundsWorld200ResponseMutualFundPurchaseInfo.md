# GetMutualFundsWorld200ResponseMutualFundPurchaseInfo

Purchase information of a mutual fund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expenses** | [**GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses**](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses.md) |  | [optional] [default to undefined]
**minimums** | [**GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums**](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums.md) |  | [optional] [default to undefined]
**pricing** | [**GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing**](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing.md) |  | [optional] [default to undefined]
**brokerages** | **Array&lt;string&gt;** | List of brokerages where mutual fund can be purchased | [optional] [default to undefined]

## Example

```typescript
import { GetMutualFundsWorld200ResponseMutualFundPurchaseInfo } from '@twelvedata/twelvedata-node';

const instance: GetMutualFundsWorld200ResponseMutualFundPurchaseInfo = {
    expenses,
    minimums,
    pricing,
    brokerages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
