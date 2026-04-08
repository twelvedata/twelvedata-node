# GetLogo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**GetLogo200ResponseMeta**](GetLogo200ResponseMeta.md) |  | [optional] [default to undefined]
**url** | **string** | Link to download the logo (for stocks only) | [optional] [default to undefined]
**logoBase** | **string** | Link to download the base currency logo (for &#x60;forex&#x60; and &#x60;crypto&#x60; only) | [optional] [default to undefined]
**logoQuote** | **string** | Link to download the quote currency logo (for &#x60;forex&#x60; and &#x60;crypto&#x60; only) | [optional] [default to undefined]

## Example

```typescript
import { GetLogo200Response } from '@twelvedata/twelvedata-node';

const instance: GetLogo200Response = {
    meta,
    url,
    logoBase,
    logoQuote,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
