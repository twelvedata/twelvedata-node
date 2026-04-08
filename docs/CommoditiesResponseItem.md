# CommoditiesResponseItem

CommoditiesResponseItem represents details of a commodity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Currency pair according to ISO 4217 standard codes with slash(/) delimiter | [optional] [default to undefined]
**name** | **string** | Full name of the instrument | [optional] [default to undefined]
**category** | **string** | Category of commodity | [optional] [default to undefined]
**description** | **string** | Short description of the commodity | [optional] [default to undefined]

## Example

```typescript
import { CommoditiesResponseItem } from '@twelvedata/twelvedata-node';

const instance: CommoditiesResponseItem = {
    symbol,
    name,
    category,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
