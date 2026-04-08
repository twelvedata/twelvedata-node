# GetTaxInfo200ResponseMeta

Metadata about the requested instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The ticker symbol of an instrument for which data was requested | [optional] [default to undefined]
**name** | **string** | The instrument name | [optional] [default to undefined]
**exchange** | **string** | The exchange name where the instrument is traded | [optional] [default to undefined]
**micCode** | **string** | The Market Identifier Code (MIC) of the exchange where the instrument is traded | [optional] [default to undefined]
**country** | **string** | The instrument country name | [optional] [default to undefined]

## Example

```typescript
import { GetTaxInfo200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetTaxInfo200ResponseMeta = {
    symbol,
    name,
    exchange,
    micCode,
    country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
