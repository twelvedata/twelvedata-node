# GetIpoCalendar200ResponseValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker of the company | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**exchange** | **string** | Exchange name where the company is listed | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**priceRangeLow** | **number** | The lower bound of stock price range if available | [optional] [default to undefined]
**priceRangeHigh** | **number** | The upper bound of stock price range if available | [optional] [default to undefined]
**offerPrice** | **number** | Initial offer price if available | [optional] [default to undefined]
**currency** | **string** | Currency of the stock | [optional] [default to undefined]
**shares** | **number** | Number of shares, if available | [optional] [default to undefined]

## Example

```typescript
import { GetIpoCalendar200ResponseValueInner } from '@twelvedata/twelvedata-node';

const instance: GetIpoCalendar200ResponseValueInner = {
    symbol,
    name,
    exchange,
    micCode,
    priceRangeLow,
    priceRangeHigh,
    offerPrice,
    currency,
    shares,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
