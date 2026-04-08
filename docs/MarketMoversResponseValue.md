# MarketMoversResponseValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The exchange symbol ticker | [optional] [default to undefined]
**name** | **string** | The official name of the instrument | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**datetime** | **string** | The last updated datetime timestamp | [optional] [default to undefined]
**last** | **number** | The latest available price for the symbol today | [optional] [default to undefined]
**high** | **number** | The highest price for the symbol today | [optional] [default to undefined]
**low** | **number** | The lowest price for the symbol today | [optional] [default to undefined]
**volume** | **number** | The trading volume of the symbol today | [optional] [default to undefined]
**change** | **number** | The value of the change since the previous day | [optional] [default to undefined]
**percentChange** | **number** | The percentage change since the previous day | [optional] [default to undefined]

## Example

```typescript
import { MarketMoversResponseValue } from '@twelvedata/twelvedata-node';

const instance: MarketMoversResponseValue = {
    symbol,
    name,
    exchange,
    micCode,
    datetime,
    last,
    high,
    low,
    volume,
    change,
    percentChange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
