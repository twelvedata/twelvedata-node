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
 * @interface GetTimeSeriesAdxr200ResponseMetaIndicator
 */
export interface GetTimeSeriesAdxr200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAdxr200ResponseMetaIndicator
   */
  name: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesAdxr200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAdxr200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAdxr200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAdxr200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesAdxr200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAdxr200ResponseMetaIndicator {
  return GetTimeSeriesAdxr200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdxr200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesAdxr200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAdxr200ResponseMetaIndicator {
  return GetTimeSeriesAdxr200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAdxr200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAdxr200ResponseMetaIndicator | null,
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
