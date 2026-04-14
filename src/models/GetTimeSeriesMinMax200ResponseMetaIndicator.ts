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
 * @interface GetTimeSeriesMinMax200ResponseMetaIndicator
 */
export interface GetTimeSeriesMinMax200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMinMax200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMinMax200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMax200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMinMax200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMinMax200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMinMax200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseMetaIndicator {
  return GetTimeSeriesMinMax200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMax200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMinMax200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMinMax200ResponseMetaIndicator {
  return GetTimeSeriesMinMax200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMinMax200ResponseMetaIndicator | null,
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
