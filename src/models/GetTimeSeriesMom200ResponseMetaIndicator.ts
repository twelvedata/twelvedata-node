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
 * @interface GetTimeSeriesMom200ResponseMetaIndicator
 */
export interface GetTimeSeriesMom200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMom200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesMom200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMom200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMom200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMom200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMom200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMom200ResponseMetaIndicator {
  return GetTimeSeriesMom200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMom200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMom200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMom200ResponseMetaIndicator {
  return GetTimeSeriesMom200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMom200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMom200ResponseMetaIndicator | null,
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
