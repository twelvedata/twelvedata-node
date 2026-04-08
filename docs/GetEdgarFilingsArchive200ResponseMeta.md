# GetEdgarFilingsArchive200ResponseMeta

Meta information about the company and listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker of the company | [optional] [default to undefined]
**exchange** | **string** | Exchange name where the company is listed | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**type** | **string** | Issue type of the stock | [optional] [default to undefined]

## Example

```typescript
import { GetEdgarFilingsArchive200ResponseMeta } from '@twelvedata/twelvedata-node';

const instance: GetEdgarFilingsArchive200ResponseMeta = {
    symbol,
    exchange,
    micCode,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
