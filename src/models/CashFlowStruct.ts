/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CashFlowStructOperatingActivities } from "./CashFlowStructOperatingActivities";
import {
  CashFlowStructOperatingActivitiesFromJSON,
  CashFlowStructOperatingActivitiesFromJSONTyped,
  CashFlowStructOperatingActivitiesToJSON,
  CashFlowStructOperatingActivitiesToJSONTyped,
} from "./CashFlowStructOperatingActivities";
import type { CashFlowStructFinancingActivities } from "./CashFlowStructFinancingActivities";
import {
  CashFlowStructFinancingActivitiesFromJSON,
  CashFlowStructFinancingActivitiesFromJSONTyped,
  CashFlowStructFinancingActivitiesToJSON,
  CashFlowStructFinancingActivitiesToJSONTyped,
} from "./CashFlowStructFinancingActivities";
import type { CashFlowStructInvestingActivities } from "./CashFlowStructInvestingActivities";
import {
  CashFlowStructInvestingActivitiesFromJSON,
  CashFlowStructInvestingActivitiesFromJSONTyped,
  CashFlowStructInvestingActivitiesToJSON,
  CashFlowStructInvestingActivitiesToJSONTyped,
} from "./CashFlowStructInvestingActivities";

/**
 *
 * @export
 * @interface CashFlowStruct
 */
export interface CashFlowStruct {
  /**
   * Date of fiscal period ending
   * @type {string}
   * @memberof CashFlowStruct
   */
  fiscalDate?: string;
  /**
   * Fiscal quarter. Visible when `&period=quarterly`
   * @type {string}
   * @memberof CashFlowStruct
   */
  quarter?: string;
  /**
   * Fiscal year
   * @type {number}
   * @memberof CashFlowStruct
   */
  year?: number;
  /**
   *
   * @type {CashFlowStructOperatingActivities}
   * @memberof CashFlowStruct
   */
  operatingActivities?: CashFlowStructOperatingActivities;
  /**
   *
   * @type {CashFlowStructInvestingActivities}
   * @memberof CashFlowStruct
   */
  investingActivities?: CashFlowStructInvestingActivities;
  /**
   *
   * @type {CashFlowStructFinancingActivities}
   * @memberof CashFlowStruct
   */
  financingActivities?: CashFlowStructFinancingActivities;
  /**
   * Returns the amount of cash a company has when adding the change in cash and beginning cash balance for the current fiscal period
   * @type {number}
   * @memberof CashFlowStruct
   */
  endCashPosition?: number;
  /**
   * Refers to supplemental data about income tax paid
   * @type {number}
   * @memberof CashFlowStruct
   */
  incomeTaxPaid?: number;
  /**
   * Refers to supplemental data about interest paid
   * @type {number}
   * @memberof CashFlowStruct
   */
  interestPaid?: number;
  /**
   * Represents the cash a company generates after accounting for cash outflows to support operations and maintain its capital assets
   * @type {number}
   * @memberof CashFlowStruct
   */
  freeCashFlow?: number;
}

/**
 * Check if a given object implements the CashFlowStruct interface.
 */
export function instanceOfCashFlowStruct(
  value: object,
): value is CashFlowStruct {
  return true;
}

export function CashFlowStructFromJSON(json: any): CashFlowStruct {
  return CashFlowStructFromJSONTyped(json, false);
}

export function CashFlowStructFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowStruct {
  if (json == null) {
    return json;
  }
  return {
    fiscalDate: json["fiscal_date"] == null ? undefined : json["fiscal_date"],
    quarter: json["quarter"] == null ? undefined : json["quarter"],
    year: json["year"] == null ? undefined : json["year"],
    operatingActivities:
      json["operating_activities"] == null
        ? undefined
        : CashFlowStructOperatingActivitiesFromJSON(
            json["operating_activities"],
          ),
    investingActivities:
      json["investing_activities"] == null
        ? undefined
        : CashFlowStructInvestingActivitiesFromJSON(
            json["investing_activities"],
          ),
    financingActivities:
      json["financing_activities"] == null
        ? undefined
        : CashFlowStructFinancingActivitiesFromJSON(
            json["financing_activities"],
          ),
    endCashPosition:
      json["end_cash_position"] == null ? undefined : json["end_cash_position"],
    incomeTaxPaid:
      json["income_tax_paid"] == null ? undefined : json["income_tax_paid"],
    interestPaid:
      json["interest_paid"] == null ? undefined : json["interest_paid"],
    freeCashFlow:
      json["free_cash_flow"] == null ? undefined : json["free_cash_flow"],
  };
}

export function CashFlowStructToJSON(json: any): CashFlowStruct {
  return CashFlowStructToJSONTyped(json, false);
}

export function CashFlowStructToJSONTyped(
  value?: CashFlowStruct | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_date: value["fiscalDate"],
    quarter: value["quarter"],
    year: value["year"],
    operating_activities: CashFlowStructOperatingActivitiesToJSON(
      value["operatingActivities"],
    ),
    investing_activities: CashFlowStructInvestingActivitiesToJSON(
      value["investingActivities"],
    ),
    financing_activities: CashFlowStructFinancingActivitiesToJSON(
      value["financingActivities"],
    ),
    end_cash_position: value["endCashPosition"],
    income_tax_paid: value["incomeTaxPaid"],
    interest_paid: value["interestPaid"],
    free_cash_flow: value["freeCashFlow"],
  };
}
