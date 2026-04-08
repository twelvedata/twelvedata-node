# ResponseSanctionedEntitiy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | The instrument symbol ticker | [optional] [default to undefined]
**name** | **string** | The instrument name | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**country** | **string** | Country name | [optional] [default to undefined]
**sanction** | [**ResponseSanctionItem**](ResponseSanctionItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ResponseSanctionedEntitiy } from '@twelvedata/twelvedata-node';

const instance: ResponseSanctionedEntitiy = {
    symbol,
    name,
    micCode,
    country,
    sanction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
