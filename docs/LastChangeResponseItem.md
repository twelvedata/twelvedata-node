# LastChangeResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker of the company | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**lastChange** | **string** | The date and time of last changes, in &#x60;2006-01-02 15:04:05&#x60; format | [optional] [default to undefined]

## Example

```typescript
import { LastChangeResponseItem } from '@twelvedata/twelvedata-node';

const instance: LastChangeResponseItem = {
    symbol,
    micCode,
    lastChange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
