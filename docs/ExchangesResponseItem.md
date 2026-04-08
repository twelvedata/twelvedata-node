# ExchangesResponseItem

ExchangesResponseItem represents details of an exchange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Title of exchange | [optional] [default to undefined]
**name** | **string** | Name of exchange | [optional] [default to undefined]
**code** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**country** | **string** | Country to which stock exchange belongs to | [optional] [default to undefined]
**timezone** | **string** | Time zone where exchange is located | [optional] [default to undefined]
**access** | [**ExchangesResponseItemAccess**](ExchangesResponseItemAccess.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ExchangesResponseItem } from '@twelvedata/twelvedata-node';

const instance: ExchangesResponseItem = {
    title,
    name,
    code,
    country,
    timezone,
    access,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
