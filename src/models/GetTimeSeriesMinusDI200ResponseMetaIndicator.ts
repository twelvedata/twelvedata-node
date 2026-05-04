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
 * @interface GetTimeSeriesMinusDI200ResponseMetaIndicator
 */
export interface GetTimeSeriesMinusDI200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMinusDI200ResponseMetaIndicator
   */
  name: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMinusDI200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDI200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMinusDI200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMinusDI200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMinusDI200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMinusDI200ResponseMetaIndicator {
  return GetTimeSeriesMinusDI200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDI200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesMinusDI200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMinusDI200ResponseMetaIndicator {
  return GetTimeSeriesMinusDI200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDI200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMinusDI200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    time_period: value["timePeriod"],
  };
}
