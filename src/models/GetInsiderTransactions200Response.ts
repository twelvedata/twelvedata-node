/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetInsiderTransactions200ResponseInsiderTransactionsInner } from "./GetInsiderTransactions200ResponseInsiderTransactionsInner";
import {
  GetInsiderTransactions200ResponseInsiderTransactionsInnerFromJSON,
  GetInsiderTransactions200ResponseInsiderTransactionsInnerFromJSONTyped,
  GetInsiderTransactions200ResponseInsiderTransactionsInnerToJSON,
  GetInsiderTransactions200ResponseInsiderTransactionsInnerToJSONTyped,
} from "./GetInsiderTransactions200ResponseInsiderTransactionsInner";
import type { GetInsiderTransactions200ResponseMeta } from "./GetInsiderTransactions200ResponseMeta";
import {
  GetInsiderTransactions200ResponseMetaFromJSON,
  GetInsiderTransactions200ResponseMetaFromJSONTyped,
  GetInsiderTransactions200ResponseMetaToJSON,
  GetInsiderTransactions200ResponseMetaToJSONTyped,
} from "./GetInsiderTransactions200ResponseMeta";

/**
 *
 * @export
 * @interface GetInsiderTransactions200Response
 */
export interface GetInsiderTransactions200Response {
  /**
   *
   * @type {GetInsiderTransactions200ResponseMeta}
   * @memberof GetInsiderTransactions200Response
   */
  meta: GetInsiderTransactions200ResponseMeta;
  /**
   * List of insider transactions
   * @type {Array<GetInsiderTransactions200ResponseInsiderTransactionsInner>}
   * @memberof GetInsiderTransactions200Response
   */
  insiderTransactions: Array<GetInsiderTransactions200ResponseInsiderTransactionsInner>;
}

/**
 * Check if a given object implements the GetInsiderTransactions200Response interface.
 */
export function instanceOfGetInsiderTransactions200Response(
  value: object,
): value is GetInsiderTransactions200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (
    !("insiderTransactions" in value) ||
    value["insiderTransactions"] === undefined
  )
    return false;
  return true;
}

export function GetInsiderTransactions200ResponseFromJSON(
  json: any,
): GetInsiderTransactions200Response {
  return GetInsiderTransactions200ResponseFromJSONTyped(json, false);
}

export function GetInsiderTransactions200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetInsiderTransactions200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetInsiderTransactions200ResponseMetaFromJSON(json["meta"]),
    insiderTransactions: (json["insider_transactions"] as Array<any>).map(
      GetInsiderTransactions200ResponseInsiderTransactionsInnerFromJSON,
    ),
  };
}

export function GetInsiderTransactions200ResponseToJSON(
  json: any,
): GetInsiderTransactions200Response {
  return GetInsiderTransactions200ResponseToJSONTyped(json, false);
}

export function GetInsiderTransactions200ResponseToJSONTyped(
  value?: GetInsiderTransactions200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetInsiderTransactions200ResponseMetaToJSON(value["meta"]),
    insider_transactions: (value["insiderTransactions"] as Array<any>).map(
      GetInsiderTransactions200ResponseInsiderTransactionsInnerToJSON,
    ),
  };
}
