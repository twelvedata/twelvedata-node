# GetMarketCap200ResponseMeta

Meta information about the company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker of the company | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**currency** | **string** | Currency in which instrument is traded by ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange name where the company is listed | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Exchange timezone | [optional] [default to undefined]

## Example

```typescript
import { GetMarketCap200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetMarketCap200ResponseMeta = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    exchangeTimezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
