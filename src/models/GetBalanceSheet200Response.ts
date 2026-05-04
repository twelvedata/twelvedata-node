/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetBalanceSheet200ResponseBalanceSheetInner } from "./GetBalanceSheet200ResponseBalanceSheetInner";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInner";
import type { GetBalanceSheet200ResponseMeta } from "./GetBalanceSheet200ResponseMeta";
import {
  GetBalanceSheet200ResponseMetaFromJSON,
  GetBalanceSheet200ResponseMetaFromJSONTyped,
  GetBalanceSheet200ResponseMetaToJSON,
  GetBalanceSheet200ResponseMetaToJSONTyped,
} from "./GetBalanceSheet200ResponseMeta";

/**
 *
 * @export
 * @interface GetBalanceSheet200Response
 */
export interface GetBalanceSheet200Response {
  /**
   *
   * @type {GetBalanceSheet200ResponseMeta}
   * @memberof GetBalanceSheet200Response
   */
  meta: GetBalanceSheet200ResponseMeta;
  /**
   * Array of balance sheet records
   * @type {Array<GetBalanceSheet200ResponseBalanceSheetInner>}
   * @memberof GetBalanceSheet200Response
   */
  balanceSheet: Array<GetBalanceSheet200ResponseBalanceSheetInner>;
}

/**
 * Check if a given object implements the GetBalanceSheet200Response interface.
 */
export function instanceOfGetBalanceSheet200Response(
  value: object,
): value is GetBalanceSheet200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("balanceSheet" in value) || value["balanceSheet"] === undefined)
    return false;
  return true;
}

export function GetBalanceSheet200ResponseFromJSON(
  json: any,
): GetBalanceSheet200Response {
  return GetBalanceSheet200ResponseFromJSONTyped(json, false);
}

export function GetBalanceSheet200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetBalanceSheet200ResponseMetaFromJSON(json["meta"]),
    balanceSheet: (json["balance_sheet"] as Array<any>).map(
      GetBalanceSheet200ResponseBalanceSheetInnerFromJSON,
    ),
  };
}

export function GetBalanceSheet200ResponseToJSON(
  json: any,
): GetBalanceSheet200Response {
  return GetBalanceSheet200ResponseToJSONTyped(json, false);
}

export function GetBalanceSheet200ResponseToJSONTyped(
  value?: GetBalanceSheet200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetBalanceSheet200ResponseMetaToJSON(value["meta"]),
    balance_sheet: (value["balanceSheet"] as Array<any>).map(
      GetBalanceSheet200ResponseBalanceSheetInnerToJSON,
    ),
  };
}
