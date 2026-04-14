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
 * @interface GetTimeSeriesEma200ResponseMetaIndicator
 */
export interface GetTimeSeriesEma200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesEma200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesEma200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesEma200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesEma200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesEma200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesEma200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesEma200ResponseMetaIndicator {
  return GetTimeSeriesEma200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesEma200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesEma200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesEma200ResponseMetaIndicator {
  return GetTimeSeriesEma200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesEma200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesEma200ResponseMetaIndicator | null,
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
