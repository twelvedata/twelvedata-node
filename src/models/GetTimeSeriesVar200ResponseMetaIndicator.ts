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
 * @interface GetTimeSeriesVar200ResponseMetaIndicator
 */
export interface GetTimeSeriesVar200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesVar200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesVar200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesVar200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesVar200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesVar200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesVar200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesVar200ResponseMetaIndicator {
  return GetTimeSeriesVar200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVar200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesVar200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesVar200ResponseMetaIndicator {
  return GetTimeSeriesVar200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesVar200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesVar200ResponseMetaIndicator | null,
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
