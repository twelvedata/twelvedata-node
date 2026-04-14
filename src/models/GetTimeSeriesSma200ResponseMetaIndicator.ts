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
 * @interface GetTimeSeriesSma200ResponseMetaIndicator
 */
export interface GetTimeSeriesSma200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesSma200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesSma200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesSma200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSma200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSma200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesSma200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSma200ResponseMetaIndicator {
  return GetTimeSeriesSma200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSma200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesSma200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSma200ResponseMetaIndicator {
  return GetTimeSeriesSma200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesSma200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSma200ResponseMetaIndicator | null,
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
