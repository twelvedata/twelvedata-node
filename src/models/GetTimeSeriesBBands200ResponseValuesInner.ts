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
 * @interface GetTimeSeriesBBands200ResponseValuesInner
 */
export interface GetTimeSeriesBBands200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseValuesInner
   */
  datetime: string;
  /**
   * Upper band value
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseValuesInner
   */
  upperBand: string;
  /**
   * Middle band value
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseValuesInner
   */
  middleBand: string;
  /**
   * Lower band value
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseValuesInner
   */
  lowerBand: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBBands200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesBBands200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesBBands200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("upperBand" in value) || value["upperBand"] === undefined) return false;
  if (!("middleBand" in value) || value["middleBand"] === undefined)
    return false;
  if (!("lowerBand" in value) || value["lowerBand"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBBands200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesBBands200ResponseValuesInner {
  return GetTimeSeriesBBands200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBBands200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    upperBand: json["upper_band"],
    middleBand: json["middle_band"],
    lowerBand: json["lower_band"],
  };
}

export function GetTimeSeriesBBands200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesBBands200ResponseValuesInner {
  return GetTimeSeriesBBands200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesBBands200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    upper_band: value["upperBand"],
    middle_band: value["middleBand"],
    lower_band: value["lowerBand"],
  };
}
