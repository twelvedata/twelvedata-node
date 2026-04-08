# EdgarFilingValue

Filing value object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cik** | **number** | CIK code | [optional] [default to undefined]
**filedAt** | **number** | Filing date in UNIX timestamp | [optional] [default to undefined]
**files** | [**Array&lt;EdgarFilingFile&gt;**](EdgarFilingFile.md) | Filing files | [optional] [default to undefined]
**filingUrl** | **string** | Full URL of the filing | [optional] [default to undefined]
**formType** | **string** | Filing form type | [optional] [default to undefined]
**ticker** | **Array&lt;string&gt;** | Ticker symbols associated with the filing | [optional] [default to undefined]

## Example

```typescript
import { EdgarFilingValue } from '@twelvedata/twelvedata-node';

const instance: EdgarFilingValue = {
    cik,
    filedAt,
    files,
    filingUrl,
    formType,
    ticker,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
