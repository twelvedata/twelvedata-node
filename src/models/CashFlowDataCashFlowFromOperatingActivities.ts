/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Cash flow from operating activities
 * @export
 * @interface CashFlowDataCashFlowFromOperatingActivities
 */
export interface CashFlowDataCashFlowFromOperatingActivities {
  /**
   * Net income from continuing operations
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  netIncomeFromContinuingOperations?: number;
  /**
   * Operating cash flow
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  operatingCashFlow?: number;
  /**
   * Cash flow from continuing operating activities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  cashFlowFromContinuingOperatingActivities?: number;
  /**
   * Cash from discontinued operating activities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  cashFromDiscontinuedOperatingActivities?: number;
  /**
   * Cash flow from discontinued operation
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  cashFlowFromDiscontinuedOperation?: number;
  /**
   * Free cash flow
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  freeCashFlow?: number;
  /**
   * Cash flows from used in operating activities direct
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  cashFlowsFromUsedInOperatingActivitiesDirect?: number;
  /**
   * Taxes refund paid
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  taxesRefundPaid?: number;
  /**
   * Taxes refund paid direct
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  taxesRefundPaidDirect?: number;
  /**
   * Interest received
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  interestReceived?: number;
  /**
   * Interest received direct
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  interestReceivedDirect?: number;
  /**
   * Interest paid
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  interestPaid?: number;
  /**
   * Interest paid direct
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  interestPaidDirect?: number;
  /**
   * Dividend received
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  dividendReceived?: number;
  /**
   * Dividend received direct
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  dividendReceivedDirect?: number;
  /**
   * Dividend paid
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  dividendPaid?: number;
  /**
   * Dividend paid direct
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  dividendPaidDirect?: number;
  /**
   * Change in working capital
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInWorkingCapital?: number;
  /**
   * Change in other working capital
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInOtherWorkingCapital?: number;
  /**
   * Change in receivables
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInReceivables?: number;
  /**
   * Changes in account receivables
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changesInAccountReceivables?: number;
  /**
   * Change in payables and accrued expense
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInPayablesAndAccruedExpense?: number;
  /**
   * Change in accrued expense
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInAccruedExpense?: number;
  /**
   * Change in payable
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInPayable?: number;
  /**
   * Change in dividend payable
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInDividendPayable?: number;
  /**
   * Change in account payable
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInAccountPayable?: number;
  /**
   * Change in tax payable
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInTaxPayable?: number;
  /**
   * Change in income tax payable
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInIncomeTaxPayable?: number;
  /**
   * Change in interest payable
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInInterestPayable?: number;
  /**
   * Change in other current liabilities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInOtherCurrentLiabilities?: number;
  /**
   * Change in other current assets
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInOtherCurrentAssets?: number;
  /**
   * Change in inventory
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInInventory?: number;
  /**
   * Change in prepaid assets
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  changeInPrepaidAssets?: number;
  /**
   * Other non cash items
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  otherNonCashItems?: number;
  /**
   * Excess tax benefit from stock based compensation
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  excessTaxBenefitFromStockBasedCompensation?: number;
  /**
   * Stock based compensation
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  stockBasedCompensation?: number;
  /**
   * Unrealized gain loss on investment securities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  unrealizedGainLossOnInvestmentSecurities?: number;
  /**
   * Provision and write off of assets
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  provisionAndWriteOffOfAssets?: number;
  /**
   * Asset impairment charge
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  assetImpairmentCharge?: number;
  /**
   * Amortization of securities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  amortizationOfSecurities?: number;
  /**
   * Deferred tax
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  deferredTax?: number;
  /**
   * Deferred income tax
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  deferredIncomeTax?: number;
  /**
   * Depreciation amortization depletion
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  depreciationAmortizationDepletion?: number;
  /**
   * Depletion
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  depletion?: number;
  /**
   * Depreciation and amortization
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  depreciationAndAmortization?: number;
  /**
   * Amortization cash flow
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  amortizationCashFlow?: number;
  /**
   * Amortization of intangibles
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  amortizationOfIntangibles?: number;
  /**
   * Depreciation
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  depreciation?: number;
  /**
   * Operating gains losses
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  operatingGainsLosses?: number;
  /**
   * Pension and employee benefit expense
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  pensionAndEmployeeBenefitExpense?: number;
  /**
   * Earnings losses from equity investments
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  earningsLossesFromEquityInvestments?: number;
  /**
   * Gain loss on investment securities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  gainLossOnInvestmentSecurities?: number;
  /**
   * Net foreign currency exchange gain loss
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  netForeignCurrencyExchangeGainLoss?: number;
  /**
   * Gain loss on sale of ppe
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  gainLossOnSaleOfPpe?: number;
  /**
   * Gain loss on sale of business
   * @type {number}
   * @memberof CashFlowDataCashFlowFromOperatingActivities
   */
  gainLossOnSaleOfBusiness?: number;
}

/**
 * Check if a given object implements the CashFlowDataCashFlowFromOperatingActivities interface.
 */
export function instanceOfCashFlowDataCashFlowFromOperatingActivities(
  value: object,
): value is CashFlowDataCashFlowFromOperatingActivities {
  return true;
}

export function CashFlowDataCashFlowFromOperatingActivitiesFromJSON(
  json: any,
): CashFlowDataCashFlowFromOperatingActivities {
  return CashFlowDataCashFlowFromOperatingActivitiesFromJSONTyped(json, false);
}

export function CashFlowDataCashFlowFromOperatingActivitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataCashFlowFromOperatingActivities {
  if (json == null) {
    return json;
  }
  return {
    netIncomeFromContinuingOperations:
      json["net_income_from_continuing_operations"] == null
        ? undefined
        : json["net_income_from_continuing_operations"],
    operatingCashFlow:
      json["operating_cash_flow"] == null
        ? undefined
        : json["operating_cash_flow"],
    cashFlowFromContinuingOperatingActivities:
      json["cash_flow_from_continuing_operating_activities"] == null
        ? undefined
        : json["cash_flow_from_continuing_operating_activities"],
    cashFromDiscontinuedOperatingActivities:
      json["cash_from_discontinued_operating_activities"] == null
        ? undefined
        : json["cash_from_discontinued_operating_activities"],
    cashFlowFromDiscontinuedOperation:
      json["cash_flow_from_discontinued_operation"] == null
        ? undefined
        : json["cash_flow_from_discontinued_operation"],
    freeCashFlow:
      json["free_cash_flow"] == null ? undefined : json["free_cash_flow"],
    cashFlowsFromUsedInOperatingActivitiesDirect:
      json["cash_flows_from_used_in_operating_activities_direct"] == null
        ? undefined
        : json["cash_flows_from_used_in_operating_activities_direct"],
    taxesRefundPaid:
      json["taxes_refund_paid"] == null ? undefined : json["taxes_refund_paid"],
    taxesRefundPaidDirect:
      json["taxes_refund_paid_direct"] == null
        ? undefined
        : json["taxes_refund_paid_direct"],
    interestReceived:
      json["interest_received"] == null ? undefined : json["interest_received"],
    interestReceivedDirect:
      json["interest_received_direct"] == null
        ? undefined
        : json["interest_received_direct"],
    interestPaid:
      json["interest_paid"] == null ? undefined : json["interest_paid"],
    interestPaidDirect:
      json["interest_paid_direct"] == null
        ? undefined
        : json["interest_paid_direct"],
    dividendReceived:
      json["dividend_received"] == null ? undefined : json["dividend_received"],
    dividendReceivedDirect:
      json["dividend_received_direct"] == null
        ? undefined
        : json["dividend_received_direct"],
    dividendPaid:
      json["dividend_paid"] == null ? undefined : json["dividend_paid"],
    dividendPaidDirect:
      json["dividend_paid_direct"] == null
        ? undefined
        : json["dividend_paid_direct"],
    changeInWorkingCapital:
      json["change_in_working_capital"] == null
        ? undefined
        : json["change_in_working_capital"],
    changeInOtherWorkingCapital:
      json["change_in_other_working_capital"] == null
        ? undefined
        : json["change_in_other_working_capital"],
    changeInReceivables:
      json["change_in_receivables"] == null
        ? undefined
        : json["change_in_receivables"],
    changesInAccountReceivables:
      json["changes_in_account_receivables"] == null
        ? undefined
        : json["changes_in_account_receivables"],
    changeInPayablesAndAccruedExpense:
      json["change_in_payables_and_accrued_expense"] == null
        ? undefined
        : json["change_in_payables_and_accrued_expense"],
    changeInAccruedExpense:
      json["change_in_accrued_expense"] == null
        ? undefined
        : json["change_in_accrued_expense"],
    changeInPayable:
      json["change_in_payable"] == null ? undefined : json["change_in_payable"],
    changeInDividendPayable:
      json["change_in_dividend_payable"] == null
        ? undefined
        : json["change_in_dividend_payable"],
    changeInAccountPayable:
      json["change_in_account_payable"] == null
        ? undefined
        : json["change_in_account_payable"],
    changeInTaxPayable:
      json["change_in_tax_payable"] == null
        ? undefined
        : json["change_in_tax_payable"],
    changeInIncomeTaxPayable:
      json["change_in_income_tax_payable"] == null
        ? undefined
        : json["change_in_income_tax_payable"],
    changeInInterestPayable:
      json["change_in_interest_payable"] == null
        ? undefined
        : json["change_in_interest_payable"],
    changeInOtherCurrentLiabilities:
      json["change_in_other_current_liabilities"] == null
        ? undefined
        : json["change_in_other_current_liabilities"],
    changeInOtherCurrentAssets:
      json["change_in_other_current_assets"] == null
        ? undefined
        : json["change_in_other_current_assets"],
    changeInInventory:
      json["change_in_inventory"] == null
        ? undefined
        : json["change_in_inventory"],
    changeInPrepaidAssets:
      json["change_in_prepaid_assets"] == null
        ? undefined
        : json["change_in_prepaid_assets"],
    otherNonCashItems:
      json["other_non_cash_items"] == null
        ? undefined
        : json["other_non_cash_items"],
    excessTaxBenefitFromStockBasedCompensation:
      json["excess_tax_benefit_from_stock_based_compensation"] == null
        ? undefined
        : json["excess_tax_benefit_from_stock_based_compensation"],
    stockBasedCompensation:
      json["stock_based_compensation"] == null
        ? undefined
        : json["stock_based_compensation"],
    unrealizedGainLossOnInvestmentSecurities:
      json["unrealized_gain_loss_on_investment_securities"] == null
        ? undefined
        : json["unrealized_gain_loss_on_investment_securities"],
    provisionAndWriteOffOfAssets:
      json["provision_and_write_off_of_assets"] == null
        ? undefined
        : json["provision_and_write_off_of_assets"],
    assetImpairmentCharge:
      json["asset_impairment_charge"] == null
        ? undefined
        : json["asset_impairment_charge"],
    amortizationOfSecurities:
      json["amortization_of_securities"] == null
        ? undefined
        : json["amortization_of_securities"],
    deferredTax:
      json["deferred_tax"] == null ? undefined : json["deferred_tax"],
    deferredIncomeTax:
      json["deferred_income_tax"] == null
        ? undefined
        : json["deferred_income_tax"],
    depreciationAmortizationDepletion:
      json["depreciation_amortization_depletion"] == null
        ? undefined
        : json["depreciation_amortization_depletion"],
    depletion: json["depletion"] == null ? undefined : json["depletion"],
    depreciationAndAmortization:
      json["depreciation_and_amortization"] == null
        ? undefined
        : json["depreciation_and_amortization"],
    amortizationCashFlow:
      json["amortization_cash_flow"] == null
        ? undefined
        : json["amortization_cash_flow"],
    amortizationOfIntangibles:
      json["amortization_of_intangibles"] == null
        ? undefined
        : json["amortization_of_intangibles"],
    depreciation:
      json["depreciation"] == null ? undefined : json["depreciation"],
    operatingGainsLosses:
      json["operating_gains_losses"] == null
        ? undefined
        : json["operating_gains_losses"],
    pensionAndEmployeeBenefitExpense:
      json["pension_and_employee_benefit_expense"] == null
        ? undefined
        : json["pension_and_employee_benefit_expense"],
    earningsLossesFromEquityInvestments:
      json["earnings_losses_from_equity_investments"] == null
        ? undefined
        : json["earnings_losses_from_equity_investments"],
    gainLossOnInvestmentSecurities:
      json["gain_loss_on_investment_securities"] == null
        ? undefined
        : json["gain_loss_on_investment_securities"],
    netForeignCurrencyExchangeGainLoss:
      json["net_foreign_currency_exchange_gain_loss"] == null
        ? undefined
        : json["net_foreign_currency_exchange_gain_loss"],
    gainLossOnSaleOfPpe:
      json["gain_loss_on_sale_of_ppe"] == null
        ? undefined
        : json["gain_loss_on_sale_of_ppe"],
    gainLossOnSaleOfBusiness:
      json["gain_loss_on_sale_of_business"] == null
        ? undefined
        : json["gain_loss_on_sale_of_business"],
  };
}

export function CashFlowDataCashFlowFromOperatingActivitiesToJSON(
  json: any,
): CashFlowDataCashFlowFromOperatingActivities {
  return CashFlowDataCashFlowFromOperatingActivitiesToJSONTyped(json, false);
}

export function CashFlowDataCashFlowFromOperatingActivitiesToJSONTyped(
  value?: CashFlowDataCashFlowFromOperatingActivities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    net_income_from_continuing_operations:
      value["netIncomeFromContinuingOperations"],
    operating_cash_flow: value["operatingCashFlow"],
    cash_flow_from_continuing_operating_activities:
      value["cashFlowFromContinuingOperatingActivities"],
    cash_from_discontinued_operating_activities:
      value["cashFromDiscontinuedOperatingActivities"],
    cash_flow_from_discontinued_operation:
      value["cashFlowFromDiscontinuedOperation"],
    free_cash_flow: value["freeCashFlow"],
    cash_flows_from_used_in_operating_activities_direct:
      value["cashFlowsFromUsedInOperatingActivitiesDirect"],
    taxes_refund_paid: value["taxesRefundPaid"],
    taxes_refund_paid_direct: value["taxesRefundPaidDirect"],
    interest_received: value["interestReceived"],
    interest_received_direct: value["interestReceivedDirect"],
    interest_paid: value["interestPaid"],
    interest_paid_direct: value["interestPaidDirect"],
    dividend_received: value["dividendReceived"],
    dividend_received_direct: value["dividendReceivedDirect"],
    dividend_paid: value["dividendPaid"],
    dividend_paid_direct: value["dividendPaidDirect"],
    change_in_working_capital: value["changeInWorkingCapital"],
    change_in_other_working_capital: value["changeInOtherWorkingCapital"],
    change_in_receivables: value["changeInReceivables"],
    changes_in_account_receivables: value["changesInAccountReceivables"],
    change_in_payables_and_accrued_expense:
      value["changeInPayablesAndAccruedExpense"],
    change_in_accrued_expense: value["changeInAccruedExpense"],
    change_in_payable: value["changeInPayable"],
    change_in_dividend_payable: value["changeInDividendPayable"],
    change_in_account_payable: value["changeInAccountPayable"],
    change_in_tax_payable: value["changeInTaxPayable"],
    change_in_income_tax_payable: value["changeInIncomeTaxPayable"],
    change_in_interest_payable: value["changeInInterestPayable"],
    change_in_other_current_liabilities:
      value["changeInOtherCurrentLiabilities"],
    change_in_other_current_assets: value["changeInOtherCurrentAssets"],
    change_in_inventory: value["changeInInventory"],
    change_in_prepaid_assets: value["changeInPrepaidAssets"],
    other_non_cash_items: value["otherNonCashItems"],
    excess_tax_benefit_from_stock_based_compensation:
      value["excessTaxBenefitFromStockBasedCompensation"],
    stock_based_compensation: value["stockBasedCompensation"],
    unrealized_gain_loss_on_investment_securities:
      value["unrealizedGainLossOnInvestmentSecurities"],
    provision_and_write_off_of_assets: value["provisionAndWriteOffOfAssets"],
    asset_impairment_charge: value["assetImpairmentCharge"],
    amortization_of_securities: value["amortizationOfSecurities"],
    deferred_tax: value["deferredTax"],
    deferred_income_tax: value["deferredIncomeTax"],
    depreciation_amortization_depletion:
      value["depreciationAmortizationDepletion"],
    depletion: value["depletion"],
    depreciation_and_amortization: value["depreciationAndAmortization"],
    amortization_cash_flow: value["amortizationCashFlow"],
    amortization_of_intangibles: value["amortizationOfIntangibles"],
    depreciation: value["depreciation"],
    operating_gains_losses: value["operatingGainsLosses"],
    pension_and_employee_benefit_expense:
      value["pensionAndEmployeeBenefitExpense"],
    earnings_losses_from_equity_investments:
      value["earningsLossesFromEquityInvestments"],
    gain_loss_on_investment_securities: value["gainLossOnInvestmentSecurities"],
    net_foreign_currency_exchange_gain_loss:
      value["netForeignCurrencyExchangeGainLoss"],
    gain_loss_on_sale_of_ppe: value["gainLossOnSaleOfPpe"],
    gain_loss_on_sale_of_business: value["gainLossOnSaleOfBusiness"],
  };
}
