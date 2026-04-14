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
 * @interface GetTimeSeriesAroon200ResponseMetaIndicator
 */
export interface GetTimeSeriesAroon200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAroon200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesAroon200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAroon200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAroon200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAroon200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesAroon200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAroon200ResponseMetaIndicator {
  return GetTimeSeriesAroon200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroon200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesAroon200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAroon200ResponseMetaIndicator {
  return GetTimeSeriesAroon200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAroon200ResponseMetaIndicator | null,
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
