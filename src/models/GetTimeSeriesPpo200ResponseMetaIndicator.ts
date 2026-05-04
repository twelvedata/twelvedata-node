/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Technical indicator information
 * @export
 * @interface GetTimeSeriesPpo200ResponseMetaIndicator
 */
export interface GetTimeSeriesPpo200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The shorter time period for calculation
   * @type {number}
   * @memberof GetTimeSeriesPpo200ResponseMetaIndicator
   */
  fastPeriod: number;
  /**
   * The longer time period for calculation
   * @type {number}
   * @memberof GetTimeSeriesPpo200ResponseMetaIndicator
   */
  slowPeriod: number;
  /**
   * The type of moving average used
   * @type {string}
   * @memberof GetTimeSeriesPpo200ResponseMetaIndicator
   */
  maType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPpo200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesPpo200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesPpo200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("fastPeriod" in value) || value["fastPeriod"] === undefined)
    return false;
  if (!("slowPeriod" in value) || value["slowPeriod"] === undefined)
    return false;
  if (!("maType" in value) || value["maType"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPpo200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesPpo200ResponseMetaIndicator {
  return GetTimeSeriesPpo200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPpo200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    fastPeriod: json["fast_period"],
    slowPeriod: json["slow_period"],
    maType: json["ma_type"],
  };
}

export function GetTimeSeriesPpo200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesPpo200ResponseMetaIndicator {
  return GetTimeSeriesPpo200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesPpo200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    fast_period: value["fastPeriod"],
    slow_period: value["slowPeriod"],
    ma_type: value["maType"],
  };
}
