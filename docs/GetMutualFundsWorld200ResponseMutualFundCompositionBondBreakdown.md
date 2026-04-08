# GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown

Breakdown of the fund’s bond holdings by maturity, duration, and credit quality

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averageMaturity** | [**GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity**](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageMaturity.md) |  | [optional] [default to undefined]
**averageDuration** | [**GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration**](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownAverageDuration.md) |  | [optional] [default to undefined]
**creditQuality** | [**Array&lt;GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner&gt;**](GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdownCreditQualityInner.md) | Breakdown of the fund’s bond holdings by credit rating and their respective portfolio weights | [optional] [default to undefined]

## Example

```typescript
import { GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown } from '@twelvedata/twelvedata-node';

const instance: GetMutualFundsWorld200ResponseMutualFundCompositionBondBreakdown = {
    averageMaturity,
    averageDuration,
    creditQuality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
