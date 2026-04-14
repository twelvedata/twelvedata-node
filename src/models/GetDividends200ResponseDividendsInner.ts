/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetDividends200ResponseDividendsInner
 */
export interface GetDividends200ResponseDividendsInner {
  /**
   * Stands for the ex date
   * @type {string}
   * @memberof GetDividends200ResponseDividendsInner
   */
  exDate?: string;
  /**
   * Stands for the payment amount
   * @type {number}
   * @memberof GetDividends200ResponseDividendsInner
   */
  amount?: number;
}

/**
 * Check if a given object implements the GetDividends200ResponseDividendsInner interface.
 */
export function instanceOfGetDividends200ResponseDividendsInner(
  value: object,
): value is GetDividends200ResponseDividendsInner {
  return true;
}

export function GetDividends200ResponseDividendsInnerFromJSON(
  json: any,
): GetDividends200ResponseDividendsInner {
  return GetDividends200ResponseDividendsInnerFromJSONTyped(json, false);
}

export function GetDividends200ResponseDividendsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDividends200ResponseDividendsInner {
  if (json == null) {
    return json;
  }
  return {
    exDate: json["ex_date"] == null ? undefined : json["ex_date"],
    amount: json["amount"] == null ? undefined : json["amount"],
  };
}

export function GetDividends200ResponseDividendsInnerToJSON(
  json: any,
): GetDividends200ResponseDividendsInner {
  return GetDividends200ResponseDividendsInnerToJSONTyped(json, false);
}

export function GetDividends200ResponseDividendsInnerToJSONTyped(
  value?: GetDividends200ResponseDividendsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ex_date: value["exDate"],
    amount: value["amount"],
  };
}
