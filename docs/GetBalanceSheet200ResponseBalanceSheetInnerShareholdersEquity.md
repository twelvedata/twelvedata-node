# GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity

Shareholders\' equity section of the balance sheet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commonStock** | **number** | Represents net worth of investors shares, which is equal to the total_assets - total_liabilities | [optional] [default to undefined]
**retainedEarnings** | **number** | Refers to the profits earned minus dividends paid | [optional] [default to undefined]
**otherShareholdersEquity** | **number** | Represents other not affecting retained earnings gains and looses | [optional] [default to undefined]
**totalShareholdersEquity** | **number** | Represents the net worth of a company, which is the amount that would be returned to shareholders if a company\&#39;s total assets were liquidated, and all of its debts were repaid | [optional] [default to undefined]
**additionalPaidInCapital** | **number** | Represents the additional paid-in capital, which is the amount shareholders have invested in a company above the par value of its stock | [optional] [default to undefined]
**treasuryStock** | **number** | Represents the value of shares that have been repurchased by the company and are held in its treasury | [optional] [default to undefined]
**minorityInterest** | **number** | Represents the portion of shareholders\&#39; equity that is attributable to minority shareholders in a subsidiary company | [optional] [default to undefined]

## Example

```typescript
import { GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity } from '@twelvedata/twelvedata-node';

const instance: GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity = {
    commonStock,
    retainedEarnings,
    otherShareholdersEquity,
    totalShareholdersEquity,
    additionalPaidInCapital,
    treasuryStock,
    minorityInterest,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
