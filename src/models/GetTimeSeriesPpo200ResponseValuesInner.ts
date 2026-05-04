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
 * @interface GetTimeSeriesPpo200ResponseValuesInner
 */
export interface GetTimeSeriesPpo200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseValuesInner
   */
  datetime: string;
  /**
   * PPO value
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseValuesInner
   */
  ppo: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPpo200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesPpo200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesPpo200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("ppo" in value) || value["ppo"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPpo200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesPpo200ResponseValuesInner {
  return GetTimeSeriesPpo200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPpo200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    ppo: json["ppo"],
  };
}

export function GetTimeSeriesPpo200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesPpo200ResponseValuesInner {
  return GetTimeSeriesPpo200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesPpo200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ppo: value["ppo"],
  };
}
