# InstitutionalHolderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityName** | **string** | Refers to the legal name of the institution | [optional] [default to undefined]
**dateReported** | **string** | Refers to date reported | [optional] [default to undefined]
**shares** | **number** | Refers to the number of shares owned | [optional] [default to undefined]
**value** | **number** | Total value of shares owned, calculated by multiplying &#x60;shares&#x60; by the current price | [optional] [default to undefined]
**percentHeld** | **number** | Represents the percentage of shares outstanding that are owned by the financial institution | [optional] [default to undefined]

## Example

```typescript
import { InstitutionalHolderItem } from '@twelvedata/twelvedata-node';

const instance: InstitutionalHolderItem = {
    entityName,
    dateReported,
    shares,
    value,
    percentHeld,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
