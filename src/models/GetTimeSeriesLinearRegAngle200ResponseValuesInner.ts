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
 * @interface GetTimeSeriesLinearRegAngle200ResponseValuesInner
 */
export interface GetTimeSeriesLinearRegAngle200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseValuesInner
   */
  datetime: string;
  /**
   * Linear regression angle value
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200ResponseValuesInner
   */
  linearregangle: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegAngle200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesLinearRegAngle200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesLinearRegAngle200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("linearregangle" in value) || value["linearregangle"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesLinearRegAngle200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesLinearRegAngle200ResponseValuesInner {
  return GetTimeSeriesLinearRegAngle200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegAngle200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegAngle200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    linearregangle: json["linearregangle"],
  };
}

export function GetTimeSeriesLinearRegAngle200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesLinearRegAngle200ResponseValuesInner {
  return GetTimeSeriesLinearRegAngle200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegAngle200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesLinearRegAngle200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    linearregangle: value["linearregangle"],
  };
}
