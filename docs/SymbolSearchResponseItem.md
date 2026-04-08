# SymbolSearchResponseItem

SymbolSearchResponseItem represents details of a symbol search result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**instrumentName** | **string** | Name of exchange | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Time zone where exchange is located | [optional] [default to undefined]
**instrumentType** | **string** | Type of instrument | [optional] [default to undefined]
**country** | **string** | Country to which stock exchange belongs to | [optional] [default to undefined]
**currency** | **string** | Currency in which the instrument is traded | [optional] [default to undefined]
**access** | [**SymbolSearchResponseItemAccess**](SymbolSearchResponseItemAccess.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SymbolSearchResponseItem } from '@twelvedata/twelvedata-node';

const instance: SymbolSearchResponseItem = {
    symbol,
    instrumentName,
    exchange,
    micCode,
    exchangeTimezone,
    instrumentType,
    country,
    currency,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
