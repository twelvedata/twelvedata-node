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
 * @interface GetTimeSeriesNatr200ResponseMetaIndicator
 */
export interface GetTimeSeriesNatr200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesNatr200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesNatr200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesNatr200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesNatr200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesNatr200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesNatr200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesNatr200ResponseMetaIndicator {
  return GetTimeSeriesNatr200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesNatr200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesNatr200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesNatr200ResponseMetaIndicator {
  return GetTimeSeriesNatr200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesNatr200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesNatr200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    time_period: value["timePeriod"],
  };
}
