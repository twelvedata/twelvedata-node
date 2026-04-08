# CryptocurrencyResponseItem

CryptocurrencyResponseItem represents details of a cryptocurrency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Cryptocurrency pair codes with slash(/) delimiter | [optional] [default to undefined]
**availableExchanges** | **Array&lt;string&gt;** | List of exchanges where the cryptocurrency is available | [optional] [default to undefined]
**currencyBase** | **string** | Base currency of the cryptocurrency pair | [optional] [default to undefined]
**currencyQuote** | **string** | Quote currency of the cryptocurrency pair | [optional] [default to undefined]

## Example

```typescript
import { CryptocurrencyResponseItem } from '@twelvedata/twelvedata-node';

const instance: CryptocurrencyResponseItem = {
    symbol,
    availableExchanges,
    currencyBase,
    currencyQuote,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
