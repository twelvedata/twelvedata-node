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
 * @interface GetTimeSeriesKama200ResponseMetaIndicator
 */
export interface GetTimeSeriesKama200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesKama200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesKama200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesKama200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesKama200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesKama200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesKama200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesKama200ResponseMetaIndicator {
  return GetTimeSeriesKama200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesKama200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKama200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesKama200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesKama200ResponseMetaIndicator {
  return GetTimeSeriesKama200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesKama200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesKama200ResponseMetaIndicator | null,
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
