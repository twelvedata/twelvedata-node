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
 * @interface GetTimeSeriesSum200ResponseMetaIndicator
 */
export interface GetTimeSeriesSum200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesSum200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesSum200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesSum200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSum200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSum200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesSum200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSum200ResponseMetaIndicator {
  return GetTimeSeriesSum200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSum200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesSum200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSum200ResponseMetaIndicator {
  return GetTimeSeriesSum200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSum200ResponseMetaIndicator | null,
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
