# MutualFundsListResponseListItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Fund symbol ticker | [optional] [default to undefined]
**name** | **string** | Fund name | [optional] [default to undefined]
**country** | **string** | Country of fund incorporation | [optional] [default to undefined]
**fundFamily** | **string** | Investment company that manages the fund | [optional] [default to undefined]
**fundType** | **string** | Type of fund | [optional] [default to undefined]
**performanceRating** | **number** | Performance rating from &#x60;0&#x60; to &#x60;5&#x60; | [optional] [default to undefined]
**riskRating** | **number** | Risk rating from &#x60;0&#x60; to &#x60;5&#x60; | [optional] [default to undefined]
**currency** | **string** | Currency code in which the fund is denominated | [optional] [default to undefined]
**exchange** | **string** | Exchange name where the fund is listed | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]

## Example

```typescript
import { MutualFundsListResponseListItem } from '@twelvedata/twelvedata-node';

const instance: MutualFundsListResponseListItem = {
    symbol,
    name,
    country,
    fundFamily,
    fundType,
    performanceRating,
    riskRating,
    currency,
    exchange,
    micCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
