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
 * @interface GetTimeSeriesMama200ResponseValuesInner
 */
export interface GetTimeSeriesMama200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseValuesInner
   */
  datetime: string;
  /**
   * MAMA value
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseValuesInner
   */
  mama: string;
  /**
   * FAMA value
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseValuesInner
   */
  fama: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMama200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMama200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMama200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("mama" in value) || value["mama"] === undefined) return false;
  if (!("fama" in value) || value["fama"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMama200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMama200ResponseValuesInner {
  return GetTimeSeriesMama200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMama200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    mama: json["mama"],
    fama: json["fama"],
  };
}

export function GetTimeSeriesMama200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMama200ResponseValuesInner {
  return GetTimeSeriesMama200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMama200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    mama: value["mama"],
    fama: value["fama"],
  };
}
