# ExchangeScheduleResponseItem

ExchangeScheduleResponseItem represents details of an exchange schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Official name of exchange | [optional] [default to undefined]
**name** | **string** | Name of exchange | [optional] [default to undefined]
**code** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**country** | **string** | Country to which stock exchange belongs to | [optional] [default to undefined]
**timeZone** | **string** | Time zone where exchange is located | [optional] [default to undefined]
**sessions** | [**Array&lt;ExchangeScheduleSession&gt;**](ExchangeScheduleSession.md) | Exchange trading hours | [optional] [default to undefined]

## Example

```typescript
import { ExchangeScheduleResponseItem } from '@twelvedata/twelvedata-node';

const instance: ExchangeScheduleResponseItem = {
    title,
    name,
    code,
    country,
    timeZone,
    sessions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
