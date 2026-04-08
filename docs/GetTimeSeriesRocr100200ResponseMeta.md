# GetTimeSeriesRocr100200ResponseMeta

Json object with request general information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The ticker symbol of an instrument for which data was requested. | [optional] [default to undefined]
**interval** | **string** | The time gap between consecutive data points. | [optional] [default to undefined]
**currency** | **string** | The currency of a traded instrument. | [optional] [default to undefined]
**exchangeTimezone** | **string** | The timezone of the exchange where the instrument is traded. | [optional] [default to undefined]
**exchange** | **string** | The exchange name where the instrument is traded. | [optional] [default to undefined]
**micCode** | **string** | The Market Identifier Code (MIC) of the exchange where the instrument is traded. | [optional] [default to undefined]
**type** | **string** | The asset class to which the instrument belongs. | [optional] [default to undefined]
**indicator** | [**GetTimeSeriesRocr100200ResponseMetaIndicator**](GetTimeSeriesRocr100200ResponseMetaIndicator.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesRocr100200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesRocr100200ResponseMeta = {
    symbol,
    interval,
    currency,
    exchangeTimezone,
    exchange,
    micCode,
    type,
    indicator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
