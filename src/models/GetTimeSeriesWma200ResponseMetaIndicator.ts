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
 * @interface GetTimeSeriesWma200ResponseMetaIndicator
 */
export interface GetTimeSeriesWma200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesWma200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesWma200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesWma200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesWma200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesWma200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesWma200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesWma200ResponseMetaIndicator {
  return GetTimeSeriesWma200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWma200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesWma200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesWma200ResponseMetaIndicator {
  return GetTimeSeriesWma200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesWma200ResponseMetaIndicator | null,
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
