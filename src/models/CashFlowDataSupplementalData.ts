/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Supplemental data
 * @export
 * @interface CashFlowDataSupplementalData
 */
export interface CashFlowDataSupplementalData {
  /**
   * Interest paid supplemental data
   * @type {number}
   * @memberof CashFlowDataSupplementalData
   */
  interestPaidSupplementalData?: number;
  /**
   * Income tax paid supplemental data
   * @type {number}
   * @memberof CashFlowDataSupplementalData
   */
  incomeTaxPaidSupplementalData?: number;
}

/**
 * Check if a given object implements the CashFlowDataSupplementalData interface.
 */
export function instanceOfCashFlowDataSupplementalData(
  value: object,
): value is CashFlowDataSupplementalData {
  return true;
}

export function CashFlowDataSupplementalDataFromJSON(
  json: any,
): CashFlowDataSupplementalData {
  return CashFlowDataSupplementalDataFromJSONTyped(json, false);
}

export function CashFlowDataSupplementalDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataSupplementalData {
  if (json == null) {
    return json;
  }
  return {
    interestPaidSupplementalData:
      json["interest_paid_supplemental_data"] == null
        ? undefined
        : json["interest_paid_supplemental_data"],
    incomeTaxPaidSupplementalData:
      json["income_tax_paid_supplemental_data"] == null
        ? undefined
        : json["income_tax_paid_supplemental_data"],
  };
}

export function CashFlowDataSupplementalDataToJSON(
  json: any,
): CashFlowDataSupplementalData {
  return CashFlowDataSupplementalDataToJSONTyped(json, false);
}

export function CashFlowDataSupplementalDataToJSONTyped(
  value?: CashFlowDataSupplementalData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    interest_paid_supplemental_data: value["interestPaidSupplementalData"],
    income_tax_paid_supplemental_data: value["incomeTaxPaidSupplementalData"],
  };
}
