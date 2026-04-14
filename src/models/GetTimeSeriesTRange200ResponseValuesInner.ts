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
 * @interface GetTimeSeriesTRange200ResponseValuesInner
 */
export interface GetTimeSeriesTRange200ResponseValuesInner {
  /**
   * datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseValuesInner
   */
  datetime?: string;
  /**
   * trange value
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseValuesInner
   */
  trange?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTRange200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTRange200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTRange200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesTRange200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTRange200ResponseValuesInner {
  return GetTimeSeriesTRange200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTRange200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    trange: json["trange"] == null ? undefined : json["trange"],
  };
}

export function GetTimeSeriesTRange200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTRange200ResponseValuesInner {
  return GetTimeSeriesTRange200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTRange200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    trange: value["trange"],
  };
}
