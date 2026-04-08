# GetETFsWorldComposition200ResponseEtfComposition

Composition of a etf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**majorMarketSectors** | [**Array&lt;GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner&gt;**](GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner.md) | Breakdown of the fund’s portfolio by major industry sectors and their respective weights | [optional] [default to undefined]
**countryAllocation** | [**Array&lt;GetETFsWorld200ResponseEtfCompositionCountryAllocationInner&gt;**](GetETFsWorld200ResponseEtfCompositionCountryAllocationInner.md) | Breakdown of the fund’s portfolio by country and their respective weights | [optional] [default to undefined]
**assetAllocation** | [**GetETFsWorld200ResponseEtfCompositionAssetAllocation**](GetETFsWorld200ResponseEtfCompositionAssetAllocation.md) |  | [optional] [default to undefined]
**topHoldings** | [**Array&lt;GetETFsWorld200ResponseEtfCompositionTopHoldingsInner&gt;**](GetETFsWorld200ResponseEtfCompositionTopHoldingsInner.md) | Top holdings of a fund with their respective weights in the overall portfolio composition | [optional] [default to undefined]
**bondBreakdown** | [**GetETFsWorld200ResponseEtfCompositionBondBreakdown**](GetETFsWorld200ResponseEtfCompositionBondBreakdown.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetETFsWorldComposition200ResponseEtfComposition } from '@twelvedata/twelvedata-node';

const instance: GetETFsWorldComposition200ResponseEtfComposition = {
    majorMarketSectors,
    countryAllocation,
    assetAllocation,
    topHoldings,
    bondBreakdown,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
