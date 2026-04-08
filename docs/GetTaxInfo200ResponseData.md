# GetTaxInfo200ResponseData

Tax information data containing the tax indicator for the requested instrument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxIndicator** | **string** | The instrument tax indicator, can be &#x60;null&#x60;, &#x60;us_1446f&#x60;, &#x60;spanish_ftt&#x60;, &#x60;uk_stamp_duty&#x60;, &#x60;hk_stamp_duty&#x60;, &#x60;french_ftt&#x60; or &#x60;italian_ftt&#x60; | [optional] [default to undefined]

## Example

```typescript
import { GetTaxInfo200ResponseData } from '@twelvedata/twelvedata-node';

const instance: GetTaxInfo200ResponseData = {
    taxIndicator,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
