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
 * @interface GetTimeSeriesTema200ResponseValuesInner
 */
export interface GetTimeSeriesTema200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  datetime: string;
  /**
   * TEMA value
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseValuesInner
   */
  tema: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTema200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesTema200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesTema200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("tema" in value) || value["tema"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTema200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesTema200ResponseValuesInner {
  return GetTimeSeriesTema200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTema200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    tema: json["tema"],
  };
}

export function GetTimeSeriesTema200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesTema200ResponseValuesInner {
  return GetTimeSeriesTema200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesTema200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    tema: value["tema"],
  };
}
