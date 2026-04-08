# StocksResponseItem

StocksResponseItem represents details of a stock instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Instrument symbol (ticker) | [optional] [default to undefined]
**name** | **string** | Full name of instrument | [optional] [default to undefined]
**currency** | **string** | Currency of the instrument according to the ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**country** | **string** | Country where exchange is located | [optional] [default to undefined]
**type** | **string** | Common issue type | [optional] [default to undefined]
**figiCode** | **string** | Financial instrument global identifier (FIGI) | [optional] [default to undefined]
**cfiCode** | **string** | Classification of Financial Instruments (CFI) | [optional] [default to undefined]
**isin** | **string** | International securities identification number (ISIN), available by individual request to support | [optional] [default to undefined]
**cusip** | **string** | A unique nine-character alphanumeric code used to identify financial securities, ensuring accurate data retrieval for the specified asset | [optional] [default to undefined]
**access** | [**EtfResponseItemAccess**](EtfResponseItemAccess.md) |  | [optional] [default to undefined]

## Example

```typescript
import { StocksResponseItem } from '@twelvedata/twelvedata-node';

const instance: StocksResponseItem = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    country,
    type,
    figiCode,
    cfiCode,
    isin,
    cusip,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
