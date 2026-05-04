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
 * @interface GetTimeSeriesFloor200ResponseValuesInner
 */
export interface GetTimeSeriesFloor200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseValuesInner
   */
  datetime: string;
  /**
   * Floor value
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseValuesInner
   */
  floor: string;
}

/**
 * Check if a given object implements the GetTimeSeriesFloor200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesFloor200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesFloor200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("floor" in value) || value["floor"] === undefined) return false;
  return true;
}

export function GetTimeSeriesFloor200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesFloor200ResponseValuesInner {
  return GetTimeSeriesFloor200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesFloor200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    floor: json["floor"],
  };
}

export function GetTimeSeriesFloor200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesFloor200ResponseValuesInner {
  return GetTimeSeriesFloor200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesFloor200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    floor: value["floor"],
  };
}
