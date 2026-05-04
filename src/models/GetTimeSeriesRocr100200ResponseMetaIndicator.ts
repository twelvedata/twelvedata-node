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
 * @interface GetTimeSeriesRocr100200ResponseMetaIndicator
 */
export interface GetTimeSeriesRocr100200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesRocr100200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesRocr100200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr100200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesRocr100200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesRocr100200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesRocr100200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesRocr100200ResponseMetaIndicator {
  return GetTimeSeriesRocr100200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr100200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesRocr100200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesRocr100200ResponseMetaIndicator {
  return GetTimeSeriesRocr100200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesRocr100200ResponseMetaIndicator | null,
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
