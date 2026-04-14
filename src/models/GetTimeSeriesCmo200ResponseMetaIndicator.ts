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
 * @interface GetTimeSeriesCmo200ResponseMetaIndicator
 */
export interface GetTimeSeriesCmo200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesCmo200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesCmo200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesCmo200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesCmo200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesCmo200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesCmo200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesCmo200ResponseMetaIndicator {
  return GetTimeSeriesCmo200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCmo200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesCmo200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesCmo200ResponseMetaIndicator {
  return GetTimeSeriesCmo200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesCmo200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesCmo200ResponseMetaIndicator | null,
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
