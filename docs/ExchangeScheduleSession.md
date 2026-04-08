# ExchangeScheduleSession

ExchangeScheduleSession represents a trading session

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**openTime** | **string** | Opening time of the session | [optional] [default to undefined]
**closeTime** | **string** | Closing time of the session | [optional] [default to undefined]
**sessionName** | **string** | Name of the session | [optional] [default to undefined]
**sessionType** | **string** | Type of the session | [optional] [default to undefined]

## Example

```typescript
import { ExchangeScheduleSession } from '@twelvedata/twelvedata-node';

const instance: ExchangeScheduleSession = {
    openTime,
    closeTime,
    sessionName,
    sessionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
