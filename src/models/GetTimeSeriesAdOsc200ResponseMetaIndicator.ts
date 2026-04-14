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
 * @interface GetTimeSeriesAdOsc200ResponseMetaIndicator
 */
export interface GetTimeSeriesAdOsc200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods for fast moving average
   * @type {number}
   * @memberof GetTimeSeriesAdOsc200ResponseMetaIndicator
   */
  fastPeriod?: number;
  /**
   * Number of periods for slow moving average
   * @type {number}
   * @memberof GetTimeSeriesAdOsc200ResponseMetaIndicator
   */
  slowPeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAdOsc200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAdOsc200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAdOsc200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesAdOsc200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAdOsc200ResponseMetaIndicator {
  return GetTimeSeriesAdOsc200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdOsc200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    fastPeriod: json["fast_period"] == null ? undefined : json["fast_period"],
    slowPeriod: json["slow_period"] == null ? undefined : json["slow_period"],
  };
}

export function GetTimeSeriesAdOsc200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAdOsc200ResponseMetaIndicator {
  return GetTimeSeriesAdOsc200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAdOsc200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    fast_period: value["fastPeriod"],
    slow_period: value["slowPeriod"],
  };
}
