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
 * @interface GetTimeSeriesWillR200ResponseMetaIndicator
 */
export interface GetTimeSeriesWillR200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesWillR200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesWillR200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesWillR200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesWillR200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesWillR200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesWillR200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesWillR200ResponseMetaIndicator {
  return GetTimeSeriesWillR200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWillR200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesWillR200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesWillR200ResponseMetaIndicator {
  return GetTimeSeriesWillR200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesWillR200ResponseMetaIndicator | null,
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
