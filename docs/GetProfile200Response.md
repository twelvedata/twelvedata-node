# GetProfile200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **string** | Ticker of the company | [optional] [default to undefined]
**name** | **string** | Name of the company | [optional] [default to undefined]
**exchange** | **string** | Exchange name where the company is listed | [optional] [default to undefined]
**micCode** | **string** | Market Identifier Code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**sector** | **string** | Sector at which the company operates | [optional] [default to undefined]
**industry** | **string** | Industry at which company operates | [optional] [default to undefined]
**employees** | **number** | Number of employees in the company | [optional] [default to undefined]
**website** | **string** | Website of the company | [optional] [default to undefined]
**description** | **string** | Description of the company activities | [optional] [default to undefined]
**type** | **string** | Issue type of the stock | [optional] [default to undefined]
**cEO** | **string** | Name of the CEO of the company | [optional] [default to undefined]
**address** | **string** | Street address of the company if presented | [optional] [default to undefined]
**address2** | **string** | Secondary address of the company if presented | [optional] [default to undefined]
**city** | **string** | City of the company if presented | [optional] [default to undefined]
**zip** | **string** | ZIP code of the company if presented | [optional] [default to undefined]
**state** | **string** | State of the company if presented | [optional] [default to undefined]
**country** | **string** | Country of the company if presented | [optional] [default to undefined]
**phone** | **string** | Phone number of the company if presented | [optional] [default to undefined]

## Example

```typescript
import { GetProfile200Response } from '@twelvedata/twelvedata-node';

const instance: GetProfile200Response = {
    symbol,
    name,
    exchange,
    micCode,
    sector,
    industry,
    employees,
    website,
    description,
    type,
    cEO,
    address,
    address2,
    city,
    zip,
    state,
    country,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
