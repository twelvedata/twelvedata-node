# GetPriceTarget200ResponseMeta

Meta information about the security

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol ticker of the instrument | [optional] [default to undefined]
**name** | **string** | Name of the instrument | [optional] [default to undefined]
**currency** | **string** | Currency in which the instrument is traded | [optional] [default to undefined]
**exchangeTimezone** | **string** | Timezone of the exchange | [optional] [default to undefined]
**exchange** | **string** | Exchange where the instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**type** | **string** | Type of the instrument | [optional] [default to undefined]

## Example

```typescript
import { GetPriceTarget200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetPriceTarget200ResponseMeta = {
    symbol,
    name,
    currency,
    exchangeTimezone,
    exchange,
    micCode,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
