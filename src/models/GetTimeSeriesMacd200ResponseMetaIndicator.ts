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
 * @interface GetTimeSeriesMacd200ResponseMetaIndicator
 */
export interface GetTimeSeriesMacd200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMacd200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Fast period value
   * @type {number}
   * @memberof GetTimeSeriesMacd200ResponseMetaIndicator
   */
  fastPeriod: number;
  /**
   * Slow period value
   * @type {number}
   * @memberof GetTimeSeriesMacd200ResponseMetaIndicator
   */
  slowPeriod: number;
  /**
   * Signal period value
   * @type {number}
   * @memberof GetTimeSeriesMacd200ResponseMetaIndicator
   */
  signalPeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMacd200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMacd200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMacd200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("fastPeriod" in value) || value["fastPeriod"] === undefined)
    return false;
  if (!("slowPeriod" in value) || value["slowPeriod"] === undefined)
    return false;
  if (!("signalPeriod" in value) || value["signalPeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMacd200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMacd200ResponseMetaIndicator {
  return GetTimeSeriesMacd200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacd200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    fastPeriod: json["fast_period"],
    slowPeriod: json["slow_period"],
    signalPeriod: json["signal_period"],
  };
}

export function GetTimeSeriesMacd200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMacd200ResponseMetaIndicator {
  return GetTimeSeriesMacd200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMacd200ResponseMetaIndicator | null,
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
  };
}
