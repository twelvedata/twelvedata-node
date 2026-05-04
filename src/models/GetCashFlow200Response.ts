/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { CashFlowStruct } from "./CashFlowStruct";
import {
  CashFlowStructFromJSON,
  CashFlowStructFromJSONTyped,
  CashFlowStructToJSON,
  CashFlowStructToJSONTyped,
} from "./CashFlowStruct";
import type { GetCashFlow200ResponseMeta } from "./GetCashFlow200ResponseMeta";
import {
  GetCashFlow200ResponseMetaFromJSON,
  GetCashFlow200ResponseMetaFromJSONTyped,
  GetCashFlow200ResponseMetaToJSON,
  GetCashFlow200ResponseMetaToJSONTyped,
} from "./GetCashFlow200ResponseMeta";

/**
 *
 * @export
 * @interface GetCashFlow200Response
 */
export interface GetCashFlow200Response {
  /**
   *
   * @type {GetCashFlow200ResponseMeta}
   * @memberof GetCashFlow200Response
   */
  meta: GetCashFlow200ResponseMeta;
  /**
   * Cash flow data
   * @type {Array<CashFlowStruct>}
   * @memberof GetCashFlow200Response
   */
  cashFlow: Array<CashFlowStruct>;
}

/**
 * Check if a given object implements the GetCashFlow200Response interface.
 */
export function instanceOfGetCashFlow200Response(
  value: object,
): value is GetCashFlow200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("cashFlow" in value) || value["cashFlow"] === undefined) return false;
  return true;
}

export function GetCashFlow200ResponseFromJSON(
  json: any,
): GetCashFlow200Response {
  return GetCashFlow200ResponseFromJSONTyped(json, false);
}

export function GetCashFlow200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetCashFlow200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetCashFlow200ResponseMetaFromJSON(json["meta"]),
    cashFlow: (json["cash_flow"] as Array<any>).map(CashFlowStructFromJSON),
  };
}

export function GetCashFlow200ResponseToJSON(
  json: any,
): GetCashFlow200Response {
  return GetCashFlow200ResponseToJSONTyped(json, false);
}

export function GetCashFlow200ResponseToJSONTyped(
  value?: GetCashFlow200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetCashFlow200ResponseMetaToJSON(value["meta"]),
    cash_flow: (value["cashFlow"] as Array<any>).map(CashFlowStructToJSON),
  };
}
