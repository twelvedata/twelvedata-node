# GetFundHolders200ResponseMeta

Meta information about the financial instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**name** | **string** | Name of symbol | [optional] [default to undefined]
**currency** | **string** | Currency of the instrument according to the ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Timezone of the exchange | [optional] [default to undefined]

## Example

```typescript
import { GetFundHolders200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetFundHolders200ResponseMeta = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    exchangeTimezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
