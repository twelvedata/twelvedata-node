# SymbolSearchResponseItemAccess

Info on which plan symbol is available (displayed then `show_plan` is `true`)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global** | **string** | Level of access to the symbol | [optional] [default to undefined]
**plan** | **string** | The individual plan name for the symbol | [optional] [default to undefined]
**planBusiness** | **string** | The business plan name for the symbol | [optional] [default to undefined]

## Example

```typescript
import { SymbolSearchResponseItemAccess } from '@twelvedata/twelvedata-node';

const instance: SymbolSearchResponseItemAccess = {
    global,
    plan,
    planBusiness,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
