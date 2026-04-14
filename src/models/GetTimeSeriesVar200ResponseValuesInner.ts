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
 * @interface GetTimeSeriesVar200ResponseValuesInner
 */
export interface GetTimeSeriesVar200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  datetime?: string;
  /**
   * VAR value
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseValuesInner
   */
  _var?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesVar200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesVar200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesVar200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesVar200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesVar200ResponseValuesInner {
  return GetTimeSeriesVar200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVar200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    _var: json["var"] == null ? undefined : json["var"],
  };
}

export function GetTimeSeriesVar200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesVar200ResponseValuesInner {
  return GetTimeSeriesVar200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesVar200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    var: value["_var"],
  };
}
