# ResponseMutualFundWorldPurchaseInfo

Purchase information for the mutual fund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expenses** | [**GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses**](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoExpenses.md) |  | [optional] [default to undefined]
**minimums** | [**GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums**](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums.md) |  | [optional] [default to undefined]
**pricing** | [**GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing**](GetMutualFundsWorld200ResponseMutualFundPurchaseInfoPricing.md) |  | [optional] [default to undefined]
**brokerages** | **Array&lt;string&gt;** | List of brokerages where mutual fund can be purchased | [optional] [default to undefined]

## Example

```typescript
import { ResponseMutualFundWorldPurchaseInfo } from '@twelvedata/twelvedata-node';

const instance: ResponseMutualFundWorldPurchaseInfo = {
    expenses,
    minimums,
    pricing,
    brokerages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
