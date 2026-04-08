# DividendsCalendarItem

DividendsCalendarItem represents details of a dividend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**exDate** | **string** | Ex-dividend date | [optional] [default to undefined]
**amount** | **number** | Dividend payment amount | [optional] [default to undefined]

## Example

```typescript
import { DividendsCalendarItem } from '@twelvedata/twelvedata-node';

const instance: DividendsCalendarItem = {
    symbol,
    micCode,
    exchange,
    exDate,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
