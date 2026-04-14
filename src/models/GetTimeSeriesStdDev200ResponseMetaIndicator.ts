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
 * @interface GetTimeSeriesStdDev200ResponseMetaIndicator
 */
export interface GetTimeSeriesStdDev200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesStdDev200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesStdDev200ResponseMetaIndicator
   */
  timePeriod?: number;
  /**
   * The standard deviation applied in the calculation
   * @type {number}
   * @memberof GetTimeSeriesStdDev200ResponseMetaIndicator
   */
  sd?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesStdDev200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesStdDev200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesStdDev200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesStdDev200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesStdDev200ResponseMetaIndicator {
  return GetTimeSeriesStdDev200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStdDev200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
    sd: json["sd"] == null ? undefined : json["sd"],
  };
}

export function GetTimeSeriesStdDev200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesStdDev200ResponseMetaIndicator {
  return GetTimeSeriesStdDev200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesStdDev200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
    sd: value["sd"],
  };
}
