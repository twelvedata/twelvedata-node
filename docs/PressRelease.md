# PressRelease


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Press release unique identifier | [optional] [default to undefined]
**datetime** | **string** | Press release date in ISO 8601 format | [optional] [default to undefined]
**title** | **string** | Press release title | [optional] [default to undefined]
**body** | **string** | Press release body in html format | [optional] [default to undefined]
**style** | **string** | Custom style applied to the release | [optional] [default to undefined]
**language** | **Array&lt;string&gt;** | Press release language codes | [optional] [default to undefined]

## Example

```typescript
import { PressRelease } from '@twelvedata/twelvedata-node';

const instance: PressRelease = {
    id,
    datetime,
    title,
    body,
    style,
    language,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
