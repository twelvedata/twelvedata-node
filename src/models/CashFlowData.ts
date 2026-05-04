/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CashFlowDataCashFlowFromInvestingActivities } from "./CashFlowDataCashFlowFromInvestingActivities";
import {
  CashFlowDataCashFlowFromInvestingActivitiesFromJSON,
  CashFlowDataCashFlowFromInvestingActivitiesFromJSONTyped,
  CashFlowDataCashFlowFromInvestingActivitiesToJSON,
  CashFlowDataCashFlowFromInvestingActivitiesToJSONTyped,
} from "./CashFlowDataCashFlowFromInvestingActivities";
import type { CashFlowDataSupplementalData } from "./CashFlowDataSupplementalData";
import {
  CashFlowDataSupplementalDataFromJSON,
  CashFlowDataSupplementalDataFromJSONTyped,
  CashFlowDataSupplementalDataToJSON,
  CashFlowDataSupplementalDataToJSONTyped,
} from "./CashFlowDataSupplementalData";
import type { CashFlowDataCashFlowFromOperatingActivities } from "./CashFlowDataCashFlowFromOperatingActivities";
import {
  CashFlowDataCashFlowFromOperatingActivitiesFromJSON,
  CashFlowDataCashFlowFromOperatingActivitiesFromJSONTyped,
  CashFlowDataCashFlowFromOperatingActivitiesToJSON,
  CashFlowDataCashFlowFromOperatingActivitiesToJSONTyped,
} from "./CashFlowDataCashFlowFromOperatingActivities";
import type { CashFlowDataForeignAndDomesticSales } from "./CashFlowDataForeignAndDomesticSales";
import {
  CashFlowDataForeignAndDomesticSalesFromJSON,
  CashFlowDataForeignAndDomesticSalesFromJSONTyped,
  CashFlowDataForeignAndDomesticSalesToJSON,
  CashFlowDataForeignAndDomesticSalesToJSONTyped,
} from "./CashFlowDataForeignAndDomesticSales";
import type { CashFlowDataCashFlowFromFinancingActivities } from "./CashFlowDataCashFlowFromFinancingActivities";
import {
  CashFlowDataCashFlowFromFinancingActivitiesFromJSON,
  CashFlowDataCashFlowFromFinancingActivitiesFromJSONTyped,
  CashFlowDataCashFlowFromFinancingActivitiesToJSON,
  CashFlowDataCashFlowFromFinancingActivitiesToJSONTyped,
} from "./CashFlowDataCashFlowFromFinancingActivities";
import type { CashFlowDataDirectMethodCashFlow } from "./CashFlowDataDirectMethodCashFlow";
import {
  CashFlowDataDirectMethodCashFlowFromJSON,
  CashFlowDataDirectMethodCashFlowFromJSONTyped,
  CashFlowDataDirectMethodCashFlowToJSON,
  CashFlowDataDirectMethodCashFlowToJSONTyped,
} from "./CashFlowDataDirectMethodCashFlow";
import type { CashFlowDataCashPosition } from "./CashFlowDataCashPosition";
import {
  CashFlowDataCashPositionFromJSON,
  CashFlowDataCashPositionFromJSONTyped,
  CashFlowDataCashPositionToJSON,
  CashFlowDataCashPositionToJSONTyped,
} from "./CashFlowDataCashPosition";

/**
 * CashFlowData represents cash flow data for a specific fiscal date
 * @export
 * @interface CashFlowData
 */
export interface CashFlowData {
  /**
   * Date of fiscal period ending
   * @type {string}
   * @memberof CashFlowData
   */
  fiscalDate: string;
  /**
   * Year of the cash flow statement
   * @type {number}
   * @memberof CashFlowData
   */
  year?: number;
  /**
   *
   * @type {CashFlowDataCashFlowFromOperatingActivities}
   * @memberof CashFlowData
   */
  cashFlowFromOperatingActivities?: CashFlowDataCashFlowFromOperatingActivities;
  /**
   *
   * @type {CashFlowDataCashFlowFromInvestingActivities}
   * @memberof CashFlowData
   */
  cashFlowFromInvestingActivities?: CashFlowDataCashFlowFromInvestingActivities;
  /**
   *
   * @type {CashFlowDataCashFlowFromFinancingActivities}
   * @memberof CashFlowData
   */
  cashFlowFromFinancingActivities?: CashFlowDataCashFlowFromFinancingActivities;
  /**
   *
   * @type {CashFlowDataSupplementalData}
   * @memberof CashFlowData
   */
  supplementalData?: CashFlowDataSupplementalData;
  /**
   *
   * @type {CashFlowDataForeignAndDomesticSales}
   * @memberof CashFlowData
   */
  foreignAndDomesticSales?: CashFlowDataForeignAndDomesticSales;
  /**
   *
   * @type {CashFlowDataCashPosition}
   * @memberof CashFlowData
   */
  cashPosition?: CashFlowDataCashPosition;
  /**
   *
   * @type {CashFlowDataDirectMethodCashFlow}
   * @memberof CashFlowData
   */
  directMethodCashFlow?: CashFlowDataDirectMethodCashFlow;
}

/**
 * Check if a given object implements the CashFlowData interface.
 */
export function instanceOfCashFlowData(value: object): value is CashFlowData {
  if (!("fiscalDate" in value) || value["fiscalDate"] === undefined)
    return false;
  return true;
}

export function CashFlowDataFromJSON(json: any): CashFlowData {
  return CashFlowDataFromJSONTyped(json, false);
}

export function CashFlowDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowData {
  if (json == null) {
    return json;
  }
  return {
    fiscalDate: json["fiscal_date"],
    year: json["year"] == null ? undefined : json["year"],
    cashFlowFromOperatingActivities:
      json["cash_flow_from_operating_activities"] == null
        ? undefined
        : CashFlowDataCashFlowFromOperatingActivitiesFromJSON(
            json["cash_flow_from_operating_activities"],
          ),
    cashFlowFromInvestingActivities:
      json["cash_flow_from_investing_activities"] == null
        ? undefined
        : CashFlowDataCashFlowFromInvestingActivitiesFromJSON(
            json["cash_flow_from_investing_activities"],
          ),
    cashFlowFromFinancingActivities:
      json["cash_flow_from_financing_activities"] == null
        ? undefined
        : CashFlowDataCashFlowFromFinancingActivitiesFromJSON(
            json["cash_flow_from_financing_activities"],
          ),
    supplementalData:
      json["supplemental_data"] == null
        ? undefined
        : CashFlowDataSupplementalDataFromJSON(json["supplemental_data"]),
    foreignAndDomesticSales:
      json["foreign_and_domestic_sales"] == null
        ? undefined
        : CashFlowDataForeignAndDomesticSalesFromJSON(
            json["foreign_and_domestic_sales"],
          ),
    cashPosition:
      json["cash_position"] == null
        ? undefined
        : CashFlowDataCashPositionFromJSON(json["cash_position"]),
    directMethodCashFlow:
      json["direct_method_cash_flow"] == null
        ? undefined
        : CashFlowDataDirectMethodCashFlowFromJSON(
            json["direct_method_cash_flow"],
          ),
  };
}

export function CashFlowDataToJSON(json: any): CashFlowData {
  return CashFlowDataToJSONTyped(json, false);
}

export function CashFlowDataToJSONTyped(
  value?: CashFlowData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_date: value["fiscalDate"],
    year: value["year"],
    cash_flow_from_operating_activities:
      CashFlowDataCashFlowFromOperatingActivitiesToJSON(
        value["cashFlowFromOperatingActivities"],
      ),
    cash_flow_from_investing_activities:
      CashFlowDataCashFlowFromInvestingActivitiesToJSON(
        value["cashFlowFromInvestingActivities"],
      ),
    cash_flow_from_financing_activities:
      CashFlowDataCashFlowFromFinancingActivitiesToJSON(
        value["cashFlowFromFinancingActivities"],
      ),
    supplemental_data: CashFlowDataSupplementalDataToJSON(
      value["supplementalData"],
    ),
    foreign_and_domestic_sales: CashFlowDataForeignAndDomesticSalesToJSON(
      value["foreignAndDomesticSales"],
    ),
    cash_position: CashFlowDataCashPositionToJSON(value["cashPosition"]),
    direct_method_cash_flow: CashFlowDataDirectMethodCashFlowToJSON(
      value["directMethodCashFlow"],
    ),
  };
}
