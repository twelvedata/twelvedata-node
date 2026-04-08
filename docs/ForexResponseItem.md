# ForexResponseItem

ForexResponseItem represents details of a forex pair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Currency pair according to ISO 4217 standard codes with slash(/) delimiter | [optional] [default to undefined]
**currencyGroup** | **string** | Group to which currency pair belongs to, could be: Major, Minor, Exotic and Exotic-Cross | [optional] [default to undefined]
**currencyBase** | **string** | Base currency name according to ISO 4217 standard | [optional] [default to undefined]
**currencyQuote** | **string** | Quote currency name according to ISO 4217 standard | [optional] [default to undefined]

## Example

```typescript
import { ForexResponseItem } from '@twelvedata/twelvedata-node';

const instance: ForexResponseItem = {
    symbol,
    currencyGroup,
    currencyBase,
    currencyQuote,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
