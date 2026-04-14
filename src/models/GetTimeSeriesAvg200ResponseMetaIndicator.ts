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
 * @interface GetTimeSeriesAvg200ResponseMetaIndicator
 */
export interface GetTimeSeriesAvg200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesAvg200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesAvg200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAvg200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAvg200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAvg200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesAvg200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAvg200ResponseMetaIndicator {
  return GetTimeSeriesAvg200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvg200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesAvg200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAvg200ResponseMetaIndicator {
  return GetTimeSeriesAvg200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAvg200ResponseMetaIndicator | null,
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
