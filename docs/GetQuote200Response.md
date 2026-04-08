# GetQuote200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol passed | [optional] [default to undefined]
**name** | **string** | Name of the instrument | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard. Available for stocks, ETFs, mutual funds, bonds | [optional] [default to undefined]
**currency** | **string** | Currency in which the equity is denominated. Available for stocks, ETFs, mutual funds, bonds | [optional] [default to undefined]
**datetime** | **string** | Datetime in defined timezone referring to when the bar with specified interval was opened | [optional] [default to undefined]
**timestamp** | **number** | Unix timestamp representing the opening candle of the specified interval | [optional] [default to undefined]
**lastQuoteAt** | **number** | Unix timestamp of last minute candle | [optional] [default to undefined]
**open** | **string** | Price at the opening of current bar | [optional] [default to undefined]
**high** | **string** | Highest price which occurred during the current bar | [optional] [default to undefined]
**low** | **string** | Lowest price which occurred during the current bar | [optional] [default to undefined]
**close** | **string** | Close price at the end of the bar | [optional] [default to undefined]
**volume** | **string** | Trading volume during the bar. Available not for all instrument types | [optional] [default to undefined]
**previousClose** | **string** | Close price at the end of the previous bar | [optional] [default to undefined]
**change** | **string** | Close - previous_close | [optional] [default to undefined]
**percentChange** | **string** | (Close - previous_close) / previous_close * 100 | [optional] [default to undefined]
**averageVolume** | **string** | Average volume of the specified period. Available not for all instrument types | [optional] [default to undefined]
**rolling1dChange** | **string** | Percent change in price between the current and the backward one, where period is 1 day. Available for crypto | [optional] [default to undefined]
**rolling7dChange** | **string** | Percent change in price between the current and the backward one, where period is 7 days. Available for crypto | [optional] [default to undefined]
**rollingChange** | **string** | Percent change in price between the current and the backward one, where period specified in request param rolling_period. Available for crypto | [optional] [default to undefined]
**isMarketOpen** | **boolean** | True if market is open; false if closed | [optional] [default to undefined]
**fiftyTwoWeek** | [**GetQuote200ResponseFiftyTwoWeek**](GetQuote200ResponseFiftyTwoWeek.md) |  | [optional] [default to undefined]
**extendedChange** | **string** | Diff between the regular close price and the latest extended price. Displayed only if prepost is true | [optional] [default to undefined]
**extendedPercentChange** | **string** | Percent change in price between the regular close price and the latest extended price. Displayed only if prepost is true | [optional] [default to undefined]
**extendedPrice** | **string** | Latest extended price. Displayed only if prepost is true | [optional] [default to undefined]
**extendedTimestamp** | **number** | Unix timestamp of the last extended price. Displayed only if prepost is true | [optional] [default to undefined]

## Example

```typescript
import { GetQuote200Response } from '@twelvedata/twelvedata-node';

const instance: GetQuote200Response = {
    symbol,
    name,
    exchange,
    micCode,
    currency,
    datetime,
    timestamp,
    lastQuoteAt,
    open,
    high,
    low,
    close,
    volume,
    previousClose,
    change,
    percentChange,
    averageVolume,
    rolling1dChange,
    rolling7dChange,
    rollingChange,
    isMarketOpen,
    fiftyTwoWeek,
    extendedChange,
    extendedPercentChange,
    extendedPrice,
    extendedTimestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
