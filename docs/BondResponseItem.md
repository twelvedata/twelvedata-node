# BondResponseItem

BondResponseItem represents details of a bond

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Bond symbol | [optional] [default to undefined]
**name** | **string** | Full name of the bond | [optional] [default to undefined]
**country** | **string** | Country where the bond is located | [optional] [default to undefined]
**currency** | **string** | Currency of the bond according to the ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where the bond is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**type** | **string** | Type of the bond | [optional] [default to undefined]
**access** | [**BondsResponseItemAccess**](BondsResponseItemAccess.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BondResponseItem } from '@twelvedata/twelvedata-node';

const instance: BondResponseItem = {
    symbol,
    name,
    country,
    currency,
    exchange,
    micCode,
    type,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
