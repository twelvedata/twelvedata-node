# CountryResponseItem

CountryResponseItem represents details of a country

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iso2** | **string** | Two-letter country code defined in ISO 3166 | [optional] [default to undefined]
**iso3** | **string** | Three-letter country code defined in ISO 3166 | [optional] [default to undefined]
**numeric** | **string** | Numeric country code defined in ISO 3166 | [optional] [default to undefined]
**name** | **string** | The full name of country | [optional] [default to undefined]
**officialName** | **string** | Official name of country | [optional] [default to undefined]
**capital** | **string** | Capital of country | [optional] [default to undefined]
**currency** | **string** | Currency of country | [optional] [default to undefined]

## Example

```typescript
import { CountryResponseItem } from '@twelvedata/twelvedata-node';

const instance: CountryResponseItem = {
    iso2,
    iso3,
    numeric,
    name,
    officialName,
    capital,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
