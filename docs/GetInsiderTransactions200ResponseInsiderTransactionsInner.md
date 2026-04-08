# GetInsiderTransactions200ResponseInsiderTransactionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | **string** | Full name of an individual, including first name, middle name, last name, and suffix | [optional] [default to undefined]
**position** | **string** | Job position of insider | [optional] [default to undefined]
**dateReported** | **string** | Date the transaction was reported | [optional] [default to undefined]
**isDirect** | **boolean** | &#x60;true&#x60; if direct, &#x60;false&#x60; if indirect | [optional] [default to undefined]
**shares** | **number** | As per report the number of shares acquired or disposed of the transaction | [optional] [default to undefined]
**value** | **number** | Represents the value of transaction, calculated as price multiplied by the volume | [optional] [default to undefined]
**description** | **string** | Exact price or price range of the transaction if available | [optional] [default to undefined]

## Example

```typescript
import { GetInsiderTransactions200ResponseInsiderTransactionsInner } from '@twelvedata/twelvedata-node';

const instance: GetInsiderTransactions200ResponseInsiderTransactionsInner = {
    fullName,
    position,
    dateReported,
    isDirect,
    shares,
    value,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
