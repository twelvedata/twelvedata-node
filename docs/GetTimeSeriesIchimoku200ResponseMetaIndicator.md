# GetTimeSeriesIchimoku200ResponseMetaIndicator

Technical indicator information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the technical indicator | [optional] [default to undefined]
**conversionLinePeriod** | **number** | The time period used for generating the conversation line | [optional] [default to undefined]
**baseLinePeriod** | **number** | The time period used for generating the base line | [optional] [default to undefined]
**leadingSpanBPeriod** | **number** | The time period used for generating the leading span B line | [optional] [default to undefined]
**laggingSpanPeriod** | **number** | The time period used for generating the lagging span line | [optional] [default to undefined]
**includeAheadSpanPeriod** | **boolean** | Indicates whether to include ahead span period | [optional] [default to undefined]

## Example

```typescript
import { GetTimeSeriesIchimoku200ResponseMetaIndicator } from '@twelvedata/twelvedata-node';

const instance: GetTimeSeriesIchimoku200ResponseMetaIndicator = {
    name,
    conversionLinePeriod,
    baseLinePeriod,
    leadingSpanBPeriod,
    laggingSpanPeriod,
    includeAheadSpanPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
