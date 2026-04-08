# ResponseMutualFundWorldComposition

Mutual fund composition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**majorMarketSectors** | [**Array&lt;GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner&gt;**](GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner.md) | Breakdown of the fund’s portfolio by major industry sectors and their respective weights | [optional] [default to undefined]
**assetAllocation** | [**GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation**](GetMutualFundsWorld200ResponseMutualFundCompositionAssetAllocation.md) |  | [optional] [default to undefined]
**topHoldings** | [**Array&lt;GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner&gt;**](GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner.md) | Top holdings of the fund with their respective weights in the overall portfolio composition | [optional] [default to undefined]
**bondBreakdown** | [**GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown**](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ResponseMutualFundWorldComposition } from '@twelvedata/twelvedata-node';

const instance: ResponseMutualFundWorldComposition = {
    majorMarketSectors,
    assetAllocation,
    topHoldings,
    bondBreakdown,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
