# GetETFsWorld200ResponseEtfPerformance

Detailed performance of a etf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trailingReturns** | [**Array&lt;GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner&gt;**](GetETFsWorld200ResponseEtfPerformanceTrailingReturnsInner.md) | Performance returns of the fund and its category over various trailing time periods | [optional] [default to undefined]
**annualTotalReturns** | [**Array&lt;GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner&gt;**](GetETFsWorld200ResponseEtfPerformanceAnnualTotalReturnsInner.md) | Fund and category total returns (%) for each calendar year | [optional] [default to undefined]

## Example

```typescript
import { GetETFsWorld200ResponseEtfPerformance } from '@twelvedata/twelvedata-node';

const instance: GetETFsWorld200ResponseEtfPerformance = {
    trailingReturns,
    annualTotalReturns,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
