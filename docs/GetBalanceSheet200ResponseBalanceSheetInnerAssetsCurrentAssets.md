# GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets

Current assets section

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash** | **number** | Cash includes currency, bank accounts, and undeposited checks | [optional] [default to undefined]
**cashEquivalents** | **number** | Represents cash equivalents that have high credit quality and are highly liquid | [optional] [default to undefined]
**cashAndCashEquivalents** | **number** | Combined value of cash and cash equivalents when company doesn\&#39;t report a breakdown | [optional] [default to undefined]
**otherShortTermInvestments** | **number** | Represents other short term investments | [optional] [default to undefined]
**accountsReceivable** | **number** | Represents the balance of money due to a firm for goods or services delivered or used but not yet paid for by customers | [optional] [default to undefined]
**otherReceivables** | **number** | Represents other receivables | [optional] [default to undefined]
**inventory** | **number** | Represents the goods available for sale and raw materials used to produce goods available for sale | [optional] [default to undefined]
**prepaidAssets** | **number** | Represents expense that has already been paid for, but which has not yet been consumed | [optional] [default to undefined]
**restrictedCash** | **number** | Represents money that is held for a specific purpose and thus not available to the company for immediate or general business use | [optional] [default to undefined]
**assetsHeldForSale** | **number** | Represents assets which company plans to sell | [optional] [default to undefined]
**hedgingAssets** | **number** | Represents money that is spent on hedging assets | [optional] [default to undefined]
**otherCurrentAssets** | **number** | Represents other current assets | [optional] [default to undefined]
**totalCurrentAssets** | **number** | All current assets values in a total | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets = {
    cash,
    cashEquivalents,
    cashAndCashEquivalents,
    otherShortTermInvestments,
    accountsReceivable,
    otherReceivables,
    inventory,
    prepaidAssets,
    restrictedCash,
    assetsHeldForSale,
    hedgingAssets,
    otherCurrentAssets,
    totalCurrentAssets,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
