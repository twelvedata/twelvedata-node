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
 * @interface GetTimeSeriesLinearRegIntercept200ResponseValuesInner
 */
export interface GetTimeSeriesLinearRegIntercept200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseValuesInner
   */
  datetime: string;
  /**
   * Linear Regression Intercept value
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseValuesInner
   */
  linearregintercept: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegIntercept200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesLinearRegIntercept200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesLinearRegIntercept200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (
    !("linearregintercept" in value) ||
    value["linearregintercept"] === undefined
  )
    return false;
  return true;
}

export function GetTimeSeriesLinearRegIntercept200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200ResponseValuesInner {
  return GetTimeSeriesLinearRegIntercept200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegIntercept200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegIntercept200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    linearregintercept: json["linearregintercept"],
  };
}

export function GetTimeSeriesLinearRegIntercept200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200ResponseValuesInner {
  return GetTimeSeriesLinearRegIntercept200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegIntercept200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesLinearRegIntercept200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    linearregintercept: value["linearregintercept"],
  };
}
