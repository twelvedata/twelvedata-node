# GetApiUsage200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **string** | Current timestamp in UTC timezone | [optional] [default to undefined]
**currentUsage** | **number** | Number of requests made in last minute | [optional] [default to undefined]
**planLimit** | **number** | Your personal API limit (requests/minute) depending on the plan | [optional] [default to undefined]
**planCategory** | **string** | Plan category name | [optional] [default to undefined]

## Example

```typescript
import { GetApiUsage200Response } from '@twelvedata/twelvedata-node';

const instance: GetApiUsage200Response = {
    timestamp,
    currentUsage,
    planLimit,
    planCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
