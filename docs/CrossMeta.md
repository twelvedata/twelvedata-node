# CrossMeta

Json object with request general information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseInstrument** | **string** | Base instrument symbol | [optional] [default to undefined]
**baseCurrency** | **string** | Base currency | [optional] [default to undefined]
**baseExchange** | **string** | Base exchange | [optional] [default to undefined]
**interval** | **string** | Interval between two consecutive points in time series | [optional] [default to undefined]
**quoteInstrument** | **string** | Quote instrument symbol | [optional] [default to undefined]
**quoteCurrency** | **string** | Quote currency | [optional] [default to undefined]
**quoteExchange** | **string** | Quote exchange | [optional] [default to undefined]

## Example

```typescript
import { CrossMeta } from '@twelvedata/twelvedata-node';

const instance: CrossMeta = {
    baseInstrument,
    baseCurrency,
    baseExchange,
    interval,
    quoteInstrument,
    quoteCurrency,
    quoteExchange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
