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
 * @interface GetTimeSeriesTrima200ResponseMetaIndicator
 */
export interface GetTimeSeriesTrima200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesTrima200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesTrima200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesTrima200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesTrima200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesTrima200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesTrima200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesTrima200ResponseMetaIndicator {
  return GetTimeSeriesTrima200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTrima200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesTrima200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesTrima200ResponseMetaIndicator {
  return GetTimeSeriesTrima200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesTrima200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesTrima200ResponseMetaIndicator | null,
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
