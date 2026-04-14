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
 * @interface GetTimeSeriesCci200ResponseValuesInner
 */
export interface GetTimeSeriesCci200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  datetime?: string;
  /**
   * CCI value
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseValuesInner
   */
  cci?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCci200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesCci200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesCci200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesCci200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesCci200ResponseValuesInner {
  return GetTimeSeriesCci200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCci200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    cci: json["cci"] == null ? undefined : json["cci"],
  };
}

export function GetTimeSeriesCci200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesCci200ResponseValuesInner {
  return GetTimeSeriesCci200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesCci200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    cci: value["cci"],
  };
}
