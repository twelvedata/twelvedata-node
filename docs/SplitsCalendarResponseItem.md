# SplitsCalendarResponseItem

List of stock splits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Stands for the split date | [optional] [default to undefined]
**symbol** | **string** | Ticker of the company | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange name where the company is listed | [optional] [default to undefined]
**description** | **string** | Specification of the split event | [optional] [default to undefined]
**ratio** | **number** | The ratio by which the number of a company\&#39;s outstanding shares of stock are increased following a stock split. For example, a &#x60;4-for-1 split&#x60; results in four times as many outstanding shares, with each share selling at one forth of its pre-split price | [optional] [default to undefined]
**fromFactor** | **number** | From factor of the split | [optional] [default to undefined]
**toFactor** | **number** | To factor of the split | [optional] [default to undefined]

## Example

```typescript
import { SplitsCalendarResponseItem } from '@twelvedata/twelvedata-node';

const instance: SplitsCalendarResponseItem = {
    date,
    symbol,
    micCode,
    exchange,
    description,
    ratio,
    fromFactor,
    toFactor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
