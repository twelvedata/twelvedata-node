# GetEpsRevisions200ResponseEpsRevisionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Date of the EPS estimate | [optional] [default to undefined]
**period** | **string** | Period of estimation, can be &#x60;current_quarter&#x60;, &#x60;next_quarter&#x60;, &#x60;current_year&#x60;, or &#x60;next_year&#x60; | [optional] [default to undefined]
**upLastWeek** | **number** | Number of up revisions over the last 7 days | [optional] [default to undefined]
**upLastMonth** | **number** | Number of up revisions over the last 30 days | [optional] [default to undefined]
**downLastWeek** | **number** | Number of down revisions over the last 7 days | [optional] [default to undefined]
**downLastMonth** | **number** | Number of down revisions over the last 30 days | [optional] [default to undefined]

## Example

```typescript
import { GetEpsRevisions200ResponseEpsRevisionInner } from '@twelvedata/twelvedata-node';

const instance: GetEpsRevisions200ResponseEpsRevisionInner = {
    date,
    period,
    upLastWeek,
    upLastMonth,
    downLastWeek,
    downLastMonth,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
