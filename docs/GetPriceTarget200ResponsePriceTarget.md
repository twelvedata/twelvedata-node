# GetPriceTarget200ResponsePriceTarget

Price target information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | **number** | Highest price target given by an analyst | [optional] [default to undefined]
**median** | **number** | Median price target given across analysts | [optional] [default to undefined]
**low** | **number** | Lowest price target given by an analyst | [optional] [default to undefined]
**average** | **number** | Average price target given across analysts | [optional] [default to undefined]
**current** | **number** | Current price from of a security | [optional] [default to undefined]
**currency** | **string** | Currency in which the price targets values are quoted | [optional] [default to undefined]

## Example

```typescript
import { GetPriceTarget200ResponsePriceTarget } from '@twelvedata/twelvedata-node';

const instance: GetPriceTarget200ResponsePriceTarget = {
    high,
    median,
    low,
    average,
    current,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
