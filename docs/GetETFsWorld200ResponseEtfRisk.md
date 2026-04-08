# GetETFsWorld200ResponseEtfRisk

Risk metrics of a etf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**volatilityMeasures** | [**Array&lt;GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner&gt;**](GetETFsWorld200ResponseEtfRiskVolatilityMeasuresInner.md) | Risk and volatility statistics of the fund and its category over different periods | [optional] [default to undefined]
**valuationMetrics** | [**GetETFsWorld200ResponseEtfRiskValuationMetrics**](GetETFsWorld200ResponseEtfRiskValuationMetrics.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetETFsWorld200ResponseEtfRisk } from '@twelvedata/twelvedata-node';

const instance: GetETFsWorld200ResponseEtfRisk = {
    volatilityMeasures,
    valuationMetrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
