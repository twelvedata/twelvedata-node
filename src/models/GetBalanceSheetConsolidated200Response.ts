/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { BalanceSheetConsolidatedItem } from "./BalanceSheetConsolidatedItem";
import {
  BalanceSheetConsolidatedItemFromJSON,
  BalanceSheetConsolidatedItemFromJSONTyped,
  BalanceSheetConsolidatedItemToJSON,
  BalanceSheetConsolidatedItemToJSONTyped,
} from "./BalanceSheetConsolidatedItem";

/**
 *
 * @export
 * @interface GetBalanceSheetConsolidated200Response
 */
export interface GetBalanceSheetConsolidated200Response {
  /**
   * Balance sheet data
   * @type {Array<BalanceSheetConsolidatedItem>}
   * @memberof GetBalanceSheetConsolidated200Response
   */
  balanceSheet?: Array<BalanceSheetConsolidatedItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetBalanceSheetConsolidated200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetBalanceSheetConsolidated200Response interface.
 */
export function instanceOfGetBalanceSheetConsolidated200Response(
  value: object,
): value is GetBalanceSheetConsolidated200Response {
  return true;
}

export function GetBalanceSheetConsolidated200ResponseFromJSON(
  json: any,
): GetBalanceSheetConsolidated200Response {
  return GetBalanceSheetConsolidated200ResponseFromJSONTyped(json, false);
}

export function GetBalanceSheetConsolidated200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheetConsolidated200Response {
  if (json == null) {
    return json;
  }
  return {
    balanceSheet:
      json["balance_sheet"] == null
        ? undefined
        : (json["balance_sheet"] as Array<any>).map(
            BalanceSheetConsolidatedItemFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetBalanceSheetConsolidated200ResponseToJSON(
  json: any,
): GetBalanceSheetConsolidated200Response {
  return GetBalanceSheetConsolidated200ResponseToJSONTyped(json, false);
}

export function GetBalanceSheetConsolidated200ResponseToJSONTyped(
  value?: GetBalanceSheetConsolidated200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    balance_sheet:
      value["balanceSheet"] == null
        ? undefined
        : (value["balanceSheet"] as Array<any>).map(
            BalanceSheetConsolidatedItemToJSON,
          ),
    status: value["status"],
  };
}
