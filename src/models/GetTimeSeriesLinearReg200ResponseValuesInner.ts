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
 * @interface GetTimeSeriesLinearReg200ResponseValuesInner
 */
export interface GetTimeSeriesLinearReg200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseValuesInner
   */
  datetime: string;
  /**
   * linearreg value
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseValuesInner
   */
  linearreg: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearReg200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesLinearReg200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesLinearReg200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("linearreg" in value) || value["linearreg"] === undefined) return false;
  return true;
}

export function GetTimeSeriesLinearReg200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesLinearReg200ResponseValuesInner {
  return GetTimeSeriesLinearReg200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearReg200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    linearreg: json["linearreg"],
  };
}

export function GetTimeSeriesLinearReg200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesLinearReg200ResponseValuesInner {
  return GetTimeSeriesLinearReg200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesLinearReg200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    linearreg: value["linearreg"],
  };
}
