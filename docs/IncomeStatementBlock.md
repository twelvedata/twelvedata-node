# IncomeStatementBlock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiscalDate** | **string** | Date of the income statement release | [optional] [default to undefined]
**quarter** | **number** | Fiscal quarter. Visible when &#x60;&amp;period&#x3D;quarterly&#x60; | [optional] [default to undefined]
**year** | **number** | Fiscal year | [optional] [default to undefined]
**sales** | **number** | Refers to total reported revenue | [optional] [default to undefined]
**costOfGoods** | **number** | Refers to cost of revenue | [optional] [default to undefined]
**grossProfit** | **number** | Refers to net gross profit: &#x60;sales&#x60; - &#x60;cost_of_goods&#x60; | [optional] [default to undefined]
**operatingExpense** | [**IncomeStatementBlockOperatingExpense**](IncomeStatementBlockOperatingExpense.md) |  | [optional] [default to undefined]
**operatingIncome** | **number** | Refers to net operating income: &#x60;gross_profit&#x60; - &#x60;research_and_development&#x60; - &#x60;selling_general_and_administrative&#x60; | [optional] [default to undefined]
**nonOperatingInterest** | [**IncomeStatementBlockNonOperatingInterest**](IncomeStatementBlockNonOperatingInterest.md) |  | [optional] [default to undefined]
**otherIncomeExpense** | **number** | Refers to other incomes or expenses | [optional] [default to undefined]
**pretaxIncome** | **number** | Refers to earnings before tax: &#x60;operating_income&#x60; + &#x60;net_non_operating_interest&#x60; - &#x60;other_income_expense&#x60; | [optional] [default to undefined]
**incomeTax** | **number** | Refers to a tax provision | [optional] [default to undefined]
**netIncome** | **number** | Refers to net income: &#x60;pretax_income&#x60; - &#x60;income_tax&#x60; | [optional] [default to undefined]
**epsBasic** | **number** | Refers to earnings per share (EPS) | [optional] [default to undefined]
**epsDiluted** | **number** | Refers to diluted earnings per share (EPS) | [optional] [default to undefined]
**basicSharesOutstanding** | **number** | Refers for the shares outstanding held by all its shareholders | [optional] [default to undefined]
**dilutedSharesOutstanding** | **number** | Refers to the total number of shares a company would have if all dilutive securities were exercised and converted into shares | [optional] [default to undefined]
**ebit** | **number** | Refers to earnings before interest and taxes (EBIT) measure | [optional] [default to undefined]
**ebitda** | **number** | Refers to EBITDA (earnings before interest, taxes, depreciation, and amortization) measure | [optional] [default to undefined]
**netIncomeContinuousOperations** | **number** | Refers to the after-tax earnings that a business has generated from its operational activities | [optional] [default to undefined]
**minorityInterests** | **number** | Refers to amount of minority interests paid out | [optional] [default to undefined]
**preferredStockDividends** | **number** | Refers to dividend that is allocated to and paid on a company\&#39;s preferred shares | [optional] [default to undefined]

## Example

```typescript
import { IncomeStatementBlock } from '@twelvedata/twelvedata-node';

const instance: IncomeStatementBlock = {
    fiscalDate,
    quarter,
    year,
    sales,
    costOfGoods,
    grossProfit,
    operatingExpense,
    operatingIncome,
    nonOperatingInterest,
    otherIncomeExpense,
    pretaxIncome,
    incomeTax,
    netIncome,
    epsBasic,
    epsDiluted,
    basicSharesOutstanding,
    dilutedSharesOutstanding,
    ebit,
    ebitda,
    netIncomeContinuousOperations,
    minorityInterests,
    preferredStockDividends,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
