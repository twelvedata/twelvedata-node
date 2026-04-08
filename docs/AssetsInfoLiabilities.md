# AssetsInfoLiabilities

Liabilities information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalLiabilitiesNetMinorityInterest** | **number** | Total liabilities net minority interest | [optional] [default to undefined]
**currentLiabilities** | [**AssetsInfoLiabilitiesCurrentLiabilities**](AssetsInfoLiabilitiesCurrentLiabilities.md) |  | [optional] [default to undefined]
**nonCurrentLiabilities** | [**AssetsInfoLiabilitiesNonCurrentLiabilities**](AssetsInfoLiabilitiesNonCurrentLiabilities.md) |  | [optional] [default to undefined]
**equity** | [**EquityInfo**](EquityInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AssetsInfoLiabilities } from '@twelvedata/twelvedata-node';

const instance: AssetsInfoLiabilities = {
    totalLiabilitiesNetMinorityInterest,
    currentLiabilities,
    nonCurrentLiabilities,
    equity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
