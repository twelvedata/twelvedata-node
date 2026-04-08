# ResponseSanctionItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** | The sanction source | [optional] [default to undefined]
**program** | **string** | The sanction program | [optional] [default to undefined]
**notes** | **string** | Notes for the sanction | [optional] [default to undefined]
**lists** | [**Array&lt;ResponseSanctionItemList&gt;**](ResponseSanctionItemList.md) | Sanction lists | [optional] [default to undefined]

## Example

```typescript
import { ResponseSanctionItem } from '@twelvedata/twelvedata-node';

const instance: ResponseSanctionItem = {
    source,
    program,
    notes,
    lists,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
