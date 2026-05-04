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
 * @interface GetTimeSeriesMacdSlope200ResponseMetaIndicator
 */
export interface GetTimeSeriesMacdSlope200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The shorter time period for calculation
   * @type {number}
   * @memberof GetTimeSeriesMacdSlope200ResponseMetaIndicator
   */
  fastPeriod: number;
  /**
   * The longer time period for calculation
   * @type {number}
   * @memberof GetTimeSeriesMacdSlope200ResponseMetaIndicator
   */
  slowPeriod: number;
  /**
   * The time period used for generating the signal line
   * @type {number}
   * @memberof GetTimeSeriesMacdSlope200ResponseMetaIndicator
   */
  signalPeriod: number;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesMacdSlope200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdSlope200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMacdSlope200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMacdSlope200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("fastPeriod" in value) || value["fastPeriod"] === undefined)
    return false;
  if (!("slowPeriod" in value) || value["slowPeriod"] === undefined)
    return false;
  if (!("signalPeriod" in value) || value["signalPeriod"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMacdSlope200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseMetaIndicator {
  return GetTimeSeriesMacdSlope200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMacdSlope200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdSlope200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    fastPeriod: json["fast_period"],
    slowPeriod: json["slow_period"],
    signalPeriod: json["signal_period"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesMacdSlope200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMacdSlope200ResponseMetaIndicator {
  return GetTimeSeriesMacdSlope200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMacdSlope200ResponseMetaIndicator | null,
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
    signal_period: value["signalPeriod"],
    time_period: value["timePeriod"],
  };
}
