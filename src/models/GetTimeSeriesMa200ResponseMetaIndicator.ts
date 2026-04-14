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
 * @interface GetTimeSeriesMa200ResponseMetaIndicator
 */
export interface GetTimeSeriesMa200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMa200ResponseMetaIndicator
   */
  timePeriod?: number;
  /**
   * The type of moving average used
   * @type {string}
   * @memberof GetTimeSeriesMa200ResponseMetaIndicator
   */
  maType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMa200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMa200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMa200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMa200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMa200ResponseMetaIndicator {
  return GetTimeSeriesMa200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMa200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
    maType: json["ma_type"] == null ? undefined : json["ma_type"],
  };
}

export function GetTimeSeriesMa200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMa200ResponseMetaIndicator {
  return GetTimeSeriesMa200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMa200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMa200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
    ma_type: value["maType"],
  };
}
