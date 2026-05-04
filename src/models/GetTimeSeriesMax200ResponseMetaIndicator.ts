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
 * @interface GetTimeSeriesMax200ResponseMetaIndicator
 */
export interface GetTimeSeriesMax200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMax200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMax200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMax200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMax200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMax200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMax200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMax200ResponseMetaIndicator {
  return GetTimeSeriesMax200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMax200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesMax200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMax200ResponseMetaIndicator {
  return GetTimeSeriesMax200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMax200ResponseMetaIndicator | null,
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
