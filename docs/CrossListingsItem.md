# CrossListingsItem

Represents details of a cross listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker symbol of instrument | [optional] [default to undefined]
**name** | **string** | Name of symbol | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]

## Example

```typescript
import { CrossListingsItem } from '@twelvedata/twelvedata-node';

const instance: CrossListingsItem = {
    symbol,
    name,
    exchange,
    micCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
