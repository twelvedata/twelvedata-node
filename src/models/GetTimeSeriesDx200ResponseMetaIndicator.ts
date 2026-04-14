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
 * @interface GetTimeSeriesDx200ResponseMetaIndicator
 */
export interface GetTimeSeriesDx200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesDx200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesDx200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesDx200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesDx200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesDx200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesDx200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesDx200ResponseMetaIndicator {
  return GetTimeSeriesDx200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDx200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesDx200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesDx200ResponseMetaIndicator {
  return GetTimeSeriesDx200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesDx200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesDx200ResponseMetaIndicator | null,
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
