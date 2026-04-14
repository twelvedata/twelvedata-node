/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { IncomeStatementItem } from "./IncomeStatementItem";
import {
  IncomeStatementItemFromJSON,
  IncomeStatementItemFromJSONTyped,
  IncomeStatementItemToJSON,
  IncomeStatementItemToJSONTyped,
} from "./IncomeStatementItem";

/**
 *
 * @export
 * @interface GetIncomeStatementConsolidated200Response
 */
export interface GetIncomeStatementConsolidated200Response {
  /**
   * Income statement data
   * @type {Array<IncomeStatementItem>}
   * @memberof GetIncomeStatementConsolidated200Response
   */
  incomeStatement?: Array<IncomeStatementItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetIncomeStatementConsolidated200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetIncomeStatementConsolidated200Response interface.
 */
export function instanceOfGetIncomeStatementConsolidated200Response(
  value: object,
): value is GetIncomeStatementConsolidated200Response {
  return true;
}

export function GetIncomeStatementConsolidated200ResponseFromJSON(
  json: any,
): GetIncomeStatementConsolidated200Response {
  return GetIncomeStatementConsolidated200ResponseFromJSONTyped(json, false);
}

export function GetIncomeStatementConsolidated200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetIncomeStatementConsolidated200Response {
  if (json == null) {
    return json;
  }
  return {
    incomeStatement:
      json["income_statement"] == null
        ? undefined
        : (json["income_statement"] as Array<any>).map(
            IncomeStatementItemFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetIncomeStatementConsolidated200ResponseToJSON(
  json: any,
): GetIncomeStatementConsolidated200Response {
  return GetIncomeStatementConsolidated200ResponseToJSONTyped(json, false);
}

export function GetIncomeStatementConsolidated200ResponseToJSONTyped(
  value?: GetIncomeStatementConsolidated200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    income_statement:
      value["incomeStatement"] == null
        ? undefined
        : (value["incomeStatement"] as Array<any>).map(
            IncomeStatementItemToJSON,
          ),
    status: value["status"],
  };
}
