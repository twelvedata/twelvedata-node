/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Cash flow from investing activities
 * @export
 * @interface CashFlowDataCashFlowFromInvestingActivities
 */
export interface CashFlowDataCashFlowFromInvestingActivities {
  /**
   * Investing cash flow
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  investingCashFlow?: number;
  /**
   * Cash flow from continuing investing activities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  cashFlowFromContinuingInvestingActivities?: number;
  /**
   * Cash from discontinued investing activities
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  cashFromDiscontinuedInvestingActivities?: number;
  /**
   * Net other investing changes
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  netOtherInvestingChanges?: number;
  /**
   * Interest received cfi
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  interestReceivedCfi?: number;
  /**
   * Dividends received cfi
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  dividendsReceivedCfi?: number;
  /**
   * Net investment purchase and sale
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  netInvestmentPurchaseAndSale?: number;
  /**
   * Sale of investment
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  saleOfInvestment?: number;
  /**
   * Purchase of investment
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  purchaseOfInvestment?: number;
  /**
   * Net investment properties purchase and sale
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  netInvestmentPropertiesPurchaseAndSale?: number;
  /**
   * Sale of investment properties
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  saleOfInvestmentProperties?: number;
  /**
   * Purchase of investment properties
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  purchaseOfInvestmentProperties?: number;
  /**
   * Net business purchase and sale
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  netBusinessPurchaseAndSale?: number;
  /**
   * Sale of business
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  saleOfBusiness?: number;
  /**
   * Purchase of business
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  purchaseOfBusiness?: number;
  /**
   * Net intangibles purchase and sale
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  netIntangiblesPurchaseAndSale?: number;
  /**
   * Sale of intangibles
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  saleOfIntangibles?: number;
  /**
   * Purchase of intangibles
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  purchaseOfIntangibles?: number;
  /**
   * Net ppe purchase and sale
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  netPpePurchaseAndSale?: number;
  /**
   * Sale of ppe
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  saleOfPpe?: number;
  /**
   * Purchase of ppe
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  purchaseOfPpe?: number;
  /**
   * Capital expenditure reported
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  capitalExpenditureReported?: number;
  /**
   * Capital expenditure
   * @type {number}
   * @memberof CashFlowDataCashFlowFromInvestingActivities
   */
  capitalExpenditure?: number;
}

/**
 * Check if a given object implements the CashFlowDataCashFlowFromInvestingActivities interface.
 */
export function instanceOfCashFlowDataCashFlowFromInvestingActivities(
  value: object,
): value is CashFlowDataCashFlowFromInvestingActivities {
  return true;
}

export function CashFlowDataCashFlowFromInvestingActivitiesFromJSON(
  json: any,
): CashFlowDataCashFlowFromInvestingActivities {
  return CashFlowDataCashFlowFromInvestingActivitiesFromJSONTyped(json, false);
}

export function CashFlowDataCashFlowFromInvestingActivitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataCashFlowFromInvestingActivities {
  if (json == null) {
    return json;
  }
  return {
    investingCashFlow:
      json["investing_cash_flow"] == null
        ? undefined
        : json["investing_cash_flow"],
    cashFlowFromContinuingInvestingActivities:
      json["cash_flow_from_continuing_investing_activities"] == null
        ? undefined
        : json["cash_flow_from_continuing_investing_activities"],
    cashFromDiscontinuedInvestingActivities:
      json["cash_from_discontinued_investing_activities"] == null
        ? undefined
        : json["cash_from_discontinued_investing_activities"],
    netOtherInvestingChanges:
      json["net_other_investing_changes"] == null
        ? undefined
        : json["net_other_investing_changes"],
    interestReceivedCfi:
      json["interest_received_cfi"] == null
        ? undefined
        : json["interest_received_cfi"],
    dividendsReceivedCfi:
      json["dividends_received_cfi"] == null
        ? undefined
        : json["dividends_received_cfi"],
    netInvestmentPurchaseAndSale:
      json["net_investment_purchase_and_sale"] == null
        ? undefined
        : json["net_investment_purchase_and_sale"],
    saleOfInvestment:
      json["sale_of_investment"] == null
        ? undefined
        : json["sale_of_investment"],
    purchaseOfInvestment:
      json["purchase_of_investment"] == null
        ? undefined
        : json["purchase_of_investment"],
    netInvestmentPropertiesPurchaseAndSale:
      json["net_investment_properties_purchase_and_sale"] == null
        ? undefined
        : json["net_investment_properties_purchase_and_sale"],
    saleOfInvestmentProperties:
      json["sale_of_investment_properties"] == null
        ? undefined
        : json["sale_of_investment_properties"],
    purchaseOfInvestmentProperties:
      json["purchase_of_investment_properties"] == null
        ? undefined
        : json["purchase_of_investment_properties"],
    netBusinessPurchaseAndSale:
      json["net_business_purchase_and_sale"] == null
        ? undefined
        : json["net_business_purchase_and_sale"],
    saleOfBusiness:
      json["sale_of_business"] == null ? undefined : json["sale_of_business"],
    purchaseOfBusiness:
      json["purchase_of_business"] == null
        ? undefined
        : json["purchase_of_business"],
    netIntangiblesPurchaseAndSale:
      json["net_intangibles_purchase_and_sale"] == null
        ? undefined
        : json["net_intangibles_purchase_and_sale"],
    saleOfIntangibles:
      json["sale_of_intangibles"] == null
        ? undefined
        : json["sale_of_intangibles"],
    purchaseOfIntangibles:
      json["purchase_of_intangibles"] == null
        ? undefined
        : json["purchase_of_intangibles"],
    netPpePurchaseAndSale:
      json["net_ppe_purchase_and_sale"] == null
        ? undefined
        : json["net_ppe_purchase_and_sale"],
    saleOfPpe: json["sale_of_ppe"] == null ? undefined : json["sale_of_ppe"],
    purchaseOfPpe:
      json["purchase_of_ppe"] == null ? undefined : json["purchase_of_ppe"],
    capitalExpenditureReported:
      json["capital_expenditure_reported"] == null
        ? undefined
        : json["capital_expenditure_reported"],
    capitalExpenditure:
      json["capital_expenditure"] == null
        ? undefined
        : json["capital_expenditure"],
  };
}

export function CashFlowDataCashFlowFromInvestingActivitiesToJSON(
  json: any,
): CashFlowDataCashFlowFromInvestingActivities {
  return CashFlowDataCashFlowFromInvestingActivitiesToJSONTyped(json, false);
}

export function CashFlowDataCashFlowFromInvestingActivitiesToJSONTyped(
  value?: CashFlowDataCashFlowFromInvestingActivities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    investing_cash_flow: value["investingCashFlow"],
    cash_flow_from_continuing_investing_activities:
      value["cashFlowFromContinuingInvestingActivities"],
    cash_from_discontinued_investing_activities:
      value["cashFromDiscontinuedInvestingActivities"],
    net_other_investing_changes: value["netOtherInvestingChanges"],
    interest_received_cfi: value["interestReceivedCfi"],
    dividends_received_cfi: value["dividendsReceivedCfi"],
    net_investment_purchase_and_sale: value["netInvestmentPurchaseAndSale"],
    sale_of_investment: value["saleOfInvestment"],
    purchase_of_investment: value["purchaseOfInvestment"],
    net_investment_properties_purchase_and_sale:
      value["netInvestmentPropertiesPurchaseAndSale"],
    sale_of_investment_properties: value["saleOfInvestmentProperties"],
    purchase_of_investment_properties: value["purchaseOfInvestmentProperties"],
    net_business_purchase_and_sale: value["netBusinessPurchaseAndSale"],
    sale_of_business: value["saleOfBusiness"],
    purchase_of_business: value["purchaseOfBusiness"],
    net_intangibles_purchase_and_sale: value["netIntangiblesPurchaseAndSale"],
    sale_of_intangibles: value["saleOfIntangibles"],
    purchase_of_intangibles: value["purchaseOfIntangibles"],
    net_ppe_purchase_and_sale: value["netPpePurchaseAndSale"],
    sale_of_ppe: value["saleOfPpe"],
    purchase_of_ppe: value["purchaseOfPpe"],
    capital_expenditure_reported: value["capitalExpenditureReported"],
    capital_expenditure: value["capitalExpenditure"],
  };
}
