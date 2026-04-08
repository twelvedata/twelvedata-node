# GetEod200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Symbol passed | [optional] [default to undefined]
**exchange** | **string** | Exchange where instrument is traded | [optional] [default to undefined]
**micCode** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**currency** | **string** | Currency in which instrument is denominated | [optional] [default to undefined]
**datetime** | **string** | Datetime in defined timezone referring to when the bar with specified interval was opened | [optional] [default to undefined]
**close** | **string** | The most recent end of day close price | [optional] [default to undefined]

## Example

```typescript
import { GetEod200Response } from '@twelvedata/twelvedata-node';

const instance: GetEod200Response = {
    symbol,
    exchange,
    micCode,
    currency,
    datetime,
    close,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
