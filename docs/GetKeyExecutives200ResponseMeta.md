# GetKeyExecutives200ResponseMeta

Meta information about the instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**currency** | **string** | Currency code in which the instrument is denominated | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Timezone of the exchange | [optional] [default to undefined]

## Example

```typescript
import { GetKeyExecutives200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetKeyExecutives200ResponseMeta = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    exchangeTimezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
