# GetIncomeStatement200ResponseMeta

Meta information about the instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol ticker of the instrument | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**currency** | **string** | Currency of the instrument according to the ISO 4217 standard | [optional] [default to undefined]
**exchange** | **string** | Exchange where the instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**exchangeTimezone** | **string** | Exchange timezone | [optional] [default to undefined]
**period** | **string** | Period of the income statement (Annual or Quarterly) | [optional] [default to undefined]

## Example

```typescript
import { GetIncomeStatement200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetIncomeStatement200ResponseMeta = {
    symbol,
    name,
    currency,
    exchange,
    micCode,
    exchangeTimezone,
    period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
