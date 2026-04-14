/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetIncomeStatement200ResponseMeta } from "./GetIncomeStatement200ResponseMeta";
import {
  GetIncomeStatement200ResponseMetaFromJSON,
  GetIncomeStatement200ResponseMetaFromJSONTyped,
  GetIncomeStatement200ResponseMetaToJSON,
  GetIncomeStatement200ResponseMetaToJSONTyped,
} from "./GetIncomeStatement200ResponseMeta";
import type { IncomeStatementBlock } from "./IncomeStatementBlock";
import {
  IncomeStatementBlockFromJSON,
  IncomeStatementBlockFromJSONTyped,
  IncomeStatementBlockToJSON,
  IncomeStatementBlockToJSONTyped,
} from "./IncomeStatementBlock";

/**
 *
 * @export
 * @interface GetIncomeStatement200Response
 */
export interface GetIncomeStatement200Response {
  /**
   *
   * @type {GetIncomeStatement200ResponseMeta}
   * @memberof GetIncomeStatement200Response
   */
  meta?: GetIncomeStatement200ResponseMeta;
  /**
   * Income statement data
   * @type {Array<IncomeStatementBlock>}
   * @memberof GetIncomeStatement200Response
   */
  incomeStatement?: Array<IncomeStatementBlock>;
}

/**
 * Check if a given object implements the GetIncomeStatement200Response interface.
 */
export function instanceOfGetIncomeStatement200Response(
  value: object,
): value is GetIncomeStatement200Response {
  return true;
}

export function GetIncomeStatement200ResponseFromJSON(
  json: any,
): GetIncomeStatement200Response {
  return GetIncomeStatement200ResponseFromJSONTyped(json, false);
}

export function GetIncomeStatement200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetIncomeStatement200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetIncomeStatement200ResponseMetaFromJSON(json["meta"]),
    incomeStatement:
      json["income_statement"] == null
        ? undefined
        : (json["income_statement"] as Array<any>).map(
            IncomeStatementBlockFromJSON,
          ),
  };
}

export function GetIncomeStatement200ResponseToJSON(
  json: any,
): GetIncomeStatement200Response {
  return GetIncomeStatement200ResponseToJSONTyped(json, false);
}

export function GetIncomeStatement200ResponseToJSONTyped(
  value?: GetIncomeStatement200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetIncomeStatement200ResponseMetaToJSON(value["meta"]),
    income_statement:
      value["incomeStatement"] == null
        ? undefined
        : (value["incomeStatement"] as Array<any>).map(
            IncomeStatementBlockToJSON,
          ),
  };
}
