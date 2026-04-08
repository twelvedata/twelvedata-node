# TimeSeriesItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **string** | Datetime at local exchange time referring to when the bar with specified interval was opened. | [optional] [default to undefined]
**open** | **string** | Price at the opening of current bar | [optional] [default to undefined]
**high** | **string** | Highest price which occurred during the current bar. | [optional] [default to undefined]
**low** | **string** | Lowest price which occurred during the current bar. | [optional] [default to undefined]
**close** | **string** | Close price at the end of the bar. | [optional] [default to undefined]
**volume** | **string** | Trading volume which occurred during the current bar | [optional] [default to undefined]

## Example

```typescript
import { TimeSeriesItem } from '@twelvedata/twelvedata-node';

const instance: TimeSeriesItem = {
    datetime,
    open,
    high,
    low,
    close,
    volume,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
