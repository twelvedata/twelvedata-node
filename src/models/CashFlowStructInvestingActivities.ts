/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Investing activities section
 * @export
 * @interface CashFlowStructInvestingActivities
 */
export interface CashFlowStructInvestingActivities {
  /**
   * Capital expenditures (CapEx) are funds used by a company to acquire, upgrade, and maintain physical assets (PPE)
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  capitalExpenditures?: number;
  /**
   * Represents purchase of a not physical asset
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  netIntangibles?: number;
  /**
   * Refers to net amount of business purchase and sale
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  netAcquisitions?: number;
  /**
   * Represents how much money has been used in making investments, including purchases of physical assets, investments in securities
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  purchaseOfInvestments?: number;
  /**
   * Represents how much money has been generated from the sale of securities or assets
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  saleOfInvestments?: number;
  /**
   * Represents other investing activity
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  otherInvestingActivity?: number;
  /**
   * Returns total amount of cash flow used in investments
   * @type {number}
   * @memberof CashFlowStructInvestingActivities
   */
  investingCashFlow?: number;
}

/**
 * Check if a given object implements the CashFlowStructInvestingActivities interface.
 */
export function instanceOfCashFlowStructInvestingActivities(
  value: object,
): value is CashFlowStructInvestingActivities {
  return true;
}

export function CashFlowStructInvestingActivitiesFromJSON(
  json: any,
): CashFlowStructInvestingActivities {
  return CashFlowStructInvestingActivitiesFromJSONTyped(json, false);
}

export function CashFlowStructInvestingActivitiesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowStructInvestingActivities {
  if (json == null) {
    return json;
  }
  return {
    capitalExpenditures:
      json["capital_expenditures"] == null
        ? undefined
        : json["capital_expenditures"],
    netIntangibles:
      json["net_intangibles"] == null ? undefined : json["net_intangibles"],
    netAcquisitions:
      json["net_acquisitions"] == null ? undefined : json["net_acquisitions"],
    purchaseOfInvestments:
      json["purchase_of_investments"] == null
        ? undefined
        : json["purchase_of_investments"],
    saleOfInvestments:
      json["sale_of_investments"] == null
        ? undefined
        : json["sale_of_investments"],
    otherInvestingActivity:
      json["other_investing_activity"] == null
        ? undefined
        : json["other_investing_activity"],
    investingCashFlow:
      json["investing_cash_flow"] == null
        ? undefined
        : json["investing_cash_flow"],
  };
}

export function CashFlowStructInvestingActivitiesToJSON(
  json: any,
): CashFlowStructInvestingActivities {
  return CashFlowStructInvestingActivitiesToJSONTyped(json, false);
}

export function CashFlowStructInvestingActivitiesToJSONTyped(
  value?: CashFlowStructInvestingActivities | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    capital_expenditures: value["capitalExpenditures"],
    net_intangibles: value["netIntangibles"],
    net_acquisitions: value["netAcquisitions"],
    purchase_of_investments: value["purchaseOfInvestments"],
    sale_of_investments: value["saleOfInvestments"],
    other_investing_activity: value["otherInvestingActivity"],
    investing_cash_flow: value["investingCashFlow"],
  };
}
