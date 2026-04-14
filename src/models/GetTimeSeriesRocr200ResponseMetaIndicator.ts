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
 * @interface GetTimeSeriesRocr200ResponseMetaIndicator
 */
export interface GetTimeSeriesRocr200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesRocr200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesRocr200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesRocr200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesRocr200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesRocr200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesRocr200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesRocr200ResponseMetaIndicator {
  return GetTimeSeriesRocr200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesRocr200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesRocr200ResponseMetaIndicator {
  return GetTimeSeriesRocr200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesRocr200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesRocr200ResponseMetaIndicator | null,
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
