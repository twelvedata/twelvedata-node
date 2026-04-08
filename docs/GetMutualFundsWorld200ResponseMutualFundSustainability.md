# GetMutualFundsWorld200ResponseMutualFundSustainability

Sustainability information of a mutual fund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **number** | Sustainability score: asset-weighted average of normalized company-level ESG Scores for the covered holdings in the portfolio from &#x60;0&#x60; to &#x60;100&#x60; | [optional] [default to undefined]
**corporateEsgPillars** | [**GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars**](GetMutualFundsWorld200ResponseMutualFundSustainabilityCorporateEsgPillars.md) |  | [optional] [default to undefined]
**sustainableInvestment** | **boolean** | Indication that the fund discloses in their prospectus that they employ socially responsible or ESG principles in their investment selection processes | [optional] [default to undefined]
**corporateAum** | **number** | Percentage of AUM used to calculate sustainability score | [optional] [default to undefined]

## Example

```typescript
import { GetMutualFundsWorld200ResponseMutualFundSustainability } from '@twelvedata/twelvedata-node';

const instance: GetMutualFundsWorld200ResponseMutualFundSustainability = {
    score,
    corporateEsgPillars,
    sustainableInvestment,
    corporateAum,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
