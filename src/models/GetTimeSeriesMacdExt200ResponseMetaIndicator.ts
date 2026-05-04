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
 * @interface GetTimeSeriesMacdExt200ResponseMetaIndicator
 */
export interface GetTimeSeriesMacdExt200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The shorter time period for calculation
   * @type {number}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  fastPeriod: number;
  /**
   * The type of fast moving average used in the calculation
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  fastMaType: string;
  /**
   * The longer time period for calculation
   * @type {number}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  slowPeriod: number;
  /**
   * The type of slow moving average used in the calculation
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  slowMaType: string;
  /**
   * The time period used for generating the signal line
   * @type {number}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  signalPeriod: number;
  /**
   * The type of moving average used for generating the signal line
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200ResponseMetaIndicator
   */
  signalMaType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdExt200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMacdExt200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMacdExt200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("fastPeriod" in value) || value["fastPeriod"] === undefined)
    return false;
  if (!("fastMaType" in value) || value["fastMaType"] === undefined)
    return false;
  if (!("slowPeriod" in value) || value["slowPeriod"] === undefined)
    return false;
  if (!("slowMaType" in value) || value["slowMaType"] === undefined)
    return false;
  if (!("signalPeriod" in value) || value["signalPeriod"] === undefined)
    return false;
  if (!("signalMaType" in value) || value["signalMaType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMacdExt200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMacdExt200ResponseMetaIndicator {
  return GetTimeSeriesMacdExt200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdExt200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    fastPeriod: json["fast_period"],
    fastMaType: json["fast_ma_type"],
    slowPeriod: json["slow_period"],
    slowMaType: json["slow_ma_type"],
    signalPeriod: json["signal_period"],
    signalMaType: json["signal_ma_type"],
  };
}

export function GetTimeSeriesMacdExt200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMacdExt200ResponseMetaIndicator {
  return GetTimeSeriesMacdExt200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMacdExt200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    fast_period: value["fastPeriod"],
    fast_ma_type: value["fastMaType"],
    slow_period: value["slowPeriod"],
    slow_ma_type: value["slowMaType"],
    signal_period: value["signalPeriod"],
    signal_ma_type: value["signalMaType"],
  };
}
