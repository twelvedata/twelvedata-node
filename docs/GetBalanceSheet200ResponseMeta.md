# GetBalanceSheet200ResponseMeta

Metadata about the balance sheet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**currency** | **string** | Currency of the balance sheet according to the ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Exchange timezone | [optional] [default to undefined]
**period** | **string** | Values can be annual or quarterly | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseMeta = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    exchangeTimezone,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
