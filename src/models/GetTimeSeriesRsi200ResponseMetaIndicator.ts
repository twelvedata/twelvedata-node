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
 * @interface GetTimeSeriesRsi200ResponseMetaIndicator
 */
export interface GetTimeSeriesRsi200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesRsi200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesRsi200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesRsi200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesRsi200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesRsi200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesRsi200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesRsi200ResponseMetaIndicator {
  return GetTimeSeriesRsi200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRsi200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesRsi200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesRsi200ResponseMetaIndicator {
  return GetTimeSeriesRsi200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesRsi200ResponseMetaIndicator | null,
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
