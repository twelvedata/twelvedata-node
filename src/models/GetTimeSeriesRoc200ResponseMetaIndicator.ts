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
 * @interface GetTimeSeriesRoc200ResponseMetaIndicator
 */
export interface GetTimeSeriesRoc200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesRoc200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation
   * @type {number}
   * @memberof GetTimeSeriesRoc200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesRoc200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesRoc200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesRoc200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesRoc200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesRoc200ResponseMetaIndicator {
  return GetTimeSeriesRoc200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRoc200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesRoc200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesRoc200ResponseMetaIndicator {
  return GetTimeSeriesRoc200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesRoc200ResponseMetaIndicator | null,
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
