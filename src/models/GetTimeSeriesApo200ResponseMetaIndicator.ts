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
 * @interface GetTimeSeriesApo200ResponseMetaIndicator
 */
export interface GetTimeSeriesApo200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods for fast moving average
   * @type {number}
   * @memberof GetTimeSeriesApo200ResponseMetaIndicator
   */
  fastPeriod: number;
  /**
   * Number of periods for slow moving average
   * @type {number}
   * @memberof GetTimeSeriesApo200ResponseMetaIndicator
   */
  slowPeriod: number;
  /**
   * Type of moving average used
   * @type {string}
   * @memberof GetTimeSeriesApo200ResponseMetaIndicator
   */
  maType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesApo200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesApo200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesApo200ResponseMetaIndicator {
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

export function GetTimeSeriesApo200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesApo200ResponseMetaIndicator {
  return GetTimeSeriesApo200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesApo200ResponseMetaIndicator {
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

export function GetTimeSeriesApo200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesApo200ResponseMetaIndicator {
  return GetTimeSeriesApo200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesApo200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesApo200ResponseMetaIndicator | null,
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
