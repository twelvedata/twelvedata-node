# GetSplits200ResponseMeta

Metadata about the instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**name** | **string** | Name of the instrument | [optional] [default to undefined]
**currency** | **string** | Currency in which the instrument is denominated | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Timezone of the exchange | [optional] [default to undefined]

## Example

```typescript
import { GetSplits200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetSplits200ResponseMeta = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    exchangeTimezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
