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
 * @interface GetTimeSeriesMin200ResponseMetaIndicator
 */
export interface GetTimeSeriesMin200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMin200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMin200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMin200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMin200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMin200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMin200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMin200ResponseMetaIndicator {
  return GetTimeSeriesMin200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMin200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesMin200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMin200ResponseMetaIndicator {
  return GetTimeSeriesMin200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMin200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMin200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
  };
}
