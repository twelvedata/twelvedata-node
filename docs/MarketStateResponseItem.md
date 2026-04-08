# MarketStateResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The full name of exchange | [optional] [default to undefined]
**code** | **string** | Market identifier code (MIC) under ISO 10383 standard | [optional] [default to undefined]
**country** | **string** | Country where the exchange is located | [optional] [default to undefined]
**isMarketOpen** | **boolean** | Indicates if the market is currently open | [optional] [default to undefined]
**timeAfterOpen** | **string** | Time after market opening in &lt;code&gt;HH:MM:SS&lt;/code&gt; format; if currently closed - returns &lt;code&gt;00:00:00&lt;/code&gt; | [optional] [default to undefined]
**timeToOpen** | **string** | Time to market opening in &lt;code&gt;HH:MM:SS&lt;/code&gt; format; if currently open - returns &lt;code&gt;00:00:00&lt;/code&gt; | [optional] [default to undefined]
**timeToClose** | **string** | Time to market closing in &lt;code&gt;HH:MM:SS&lt;/code&gt; format; if currently closed - returns &lt;code&gt;00:00:00&lt;/code&gt; | [optional] [default to undefined]

## Example

```typescript
import { MarketStateResponseItem } from '@twelvedata/twelvedata-node';

const instance: MarketStateResponseItem = {
    name,
    code,
    country,
    isMarketOpen,
    timeAfterOpen,
    timeToOpen,
    timeToClose,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
