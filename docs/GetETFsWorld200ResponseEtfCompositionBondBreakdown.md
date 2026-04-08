# GetETFsWorld200ResponseEtfCompositionBondBreakdown

Breakdown of the fund’s portfolio by bond holding characteristics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averageMaturity** | [**GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity**](GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageMaturity.md) |  | [optional] [default to undefined]
**averageDuration** | [**GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration**](GetETFsWorld200ResponseEtfCompositionBondBreakdownAverageDuration.md) |  | [optional] [default to undefined]
**creditQuality** | [**Array&lt;GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner&gt;**](GetETFsWorld200ResponseEtfCompositionBondBreakdownCreditQualityInner.md) | Breakdown of the fund’s bond holdings by credit rating and their respective portfolio weights | [optional] [default to undefined]

## Example

```typescript
import { GetETFsWorld200ResponseEtfCompositionBondBreakdown } from '@twelvedata/twelvedata-node';

const instance: GetETFsWorld200ResponseEtfCompositionBondBreakdown = {
    averageMaturity,
    averageDuration,
    creditQuality,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
