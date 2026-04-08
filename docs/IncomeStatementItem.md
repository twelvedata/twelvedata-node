# IncomeStatementItem

IncomeStatementItem represents a single income statement record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiscalDate** | **string** | Date of the income statement release | [optional] [default to undefined]
**year** | **number** | Fiscal year | [optional] [default to undefined]
**revenue** | [**IncomeStatementItemRevenue**](IncomeStatementItemRevenue.md) |  | [optional] [default to undefined]
**grossProfit** | [**IncomeStatementItemGrossProfit**](IncomeStatementItemGrossProfit.md) |  | [optional] [default to undefined]
**operatingIncome** | [**IncomeStatementItemOperatingIncome**](IncomeStatementItemOperatingIncome.md) |  | [optional] [default to undefined]
**netIncome** | [**IncomeStatementItemNetIncome**](IncomeStatementItemNetIncome.md) |  | [optional] [default to undefined]
**earningsPerShare** | [**IncomeStatementItemEarningsPerShare**](IncomeStatementItemEarningsPerShare.md) |  | [optional] [default to undefined]
**expenses** | [**IncomeStatementItemExpenses**](IncomeStatementItemExpenses.md) |  | [optional] [default to undefined]
**interestIncomeAndExpense** | [**IncomeStatementItemInterestIncomeAndExpense**](IncomeStatementItemInterestIncomeAndExpense.md) |  | [optional] [default to undefined]
**otherIncomeAndExpenses** | [**IncomeStatementItemOtherIncomeAndExpenses**](IncomeStatementItemOtherIncomeAndExpenses.md) |  | [optional] [default to undefined]
**taxes** | [**IncomeStatementItemTaxes**](IncomeStatementItemTaxes.md) |  | [optional] [default to undefined]
**depreciationAndAmortization** | [**IncomeStatementItemDepreciationAndAmortization**](IncomeStatementItemDepreciationAndAmortization.md) |  | [optional] [default to undefined]
**ebitda** | [**IncomeStatementItemEbitda**](IncomeStatementItemEbitda.md) |  | [optional] [default to undefined]
**dividendsAndShares** | [**IncomeStatementItemDividendsAndShares**](IncomeStatementItemDividendsAndShares.md) |  | [optional] [default to undefined]
**unusualItems** | [**IncomeStatementItemUnusualItems**](IncomeStatementItemUnusualItems.md) |  | [optional] [default to undefined]
**depreciation** | [**IncomeStatementItemDepreciation**](IncomeStatementItemDepreciation.md) |  | [optional] [default to undefined]
**pretaxIncome** | [**IncomeStatementItemPretaxIncome**](IncomeStatementItemPretaxIncome.md) |  | [optional] [default to undefined]
**specialIncomeCharges** | [**IncomeStatementItemSpecialIncomeCharges**](IncomeStatementItemSpecialIncomeCharges.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IncomeStatementItem } from '@twelvedata/twelvedata-node';

const instance: IncomeStatementItem = {
    fiscalDate,
    year,
    revenue,
    grossProfit,
    operatingIncome,
    netIncome,
    earningsPerShare,
    expenses,
    interestIncomeAndExpense,
    otherIncomeAndExpenses,
    taxes,
    depreciationAndAmortization,
    ebitda,
    dividendsAndShares,
    unusualItems,
    depreciation,
    pretaxIncome,
    specialIncomeCharges,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
