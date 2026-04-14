/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CashFlowData } from "./CashFlowData";
import {
  CashFlowDataFromJSON,
  CashFlowDataFromJSONTyped,
  CashFlowDataToJSON,
  CashFlowDataToJSONTyped,
} from "./CashFlowData";

/**
 *
 * @export
 * @interface GetCashFlowConsolidated200Response
 */
export interface GetCashFlowConsolidated200Response {
  /**
   * Cash flow data
   * @type {Array<CashFlowData>}
   * @memberof GetCashFlowConsolidated200Response
   */
  cashFlow?: Array<CashFlowData>;
  /**
   * Response status
   * @type {string}
   * @memberof GetCashFlowConsolidated200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetCashFlowConsolidated200Response interface.
 */
export function instanceOfGetCashFlowConsolidated200Response(
  value: object,
): value is GetCashFlowConsolidated200Response {
  return true;
}

export function GetCashFlowConsolidated200ResponseFromJSON(
  json: any,
): GetCashFlowConsolidated200Response {
  return GetCashFlowConsolidated200ResponseFromJSONTyped(json, false);
}

export function GetCashFlowConsolidated200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCashFlowConsolidated200Response {
  if (json == null) {
    return json;
  }
  return {
    cashFlow:
      json["cash_flow"] == null
        ? undefined
        : (json["cash_flow"] as Array<any>).map(CashFlowDataFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetCashFlowConsolidated200ResponseToJSON(
  json: any,
): GetCashFlowConsolidated200Response {
  return GetCashFlowConsolidated200ResponseToJSONTyped(json, false);
}

export function GetCashFlowConsolidated200ResponseToJSONTyped(
  value?: GetCashFlowConsolidated200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    cash_flow:
      value["cashFlow"] == null
        ? undefined
        : (value["cashFlow"] as Array<any>).map(CashFlowDataToJSON),
    status: value["status"],
  };
}
