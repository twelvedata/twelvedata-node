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
 * @interface GetTimeSeriesAdx200ResponseMetaIndicator
 */
export interface GetTimeSeriesAdx200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAdx200ResponseMetaIndicator
   */
  name: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesAdx200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAdx200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAdx200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAdx200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesAdx200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAdx200ResponseMetaIndicator {
  return GetTimeSeriesAdx200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdx200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesAdx200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAdx200ResponseMetaIndicator {
  return GetTimeSeriesAdx200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAdx200ResponseMetaIndicator | null,
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
