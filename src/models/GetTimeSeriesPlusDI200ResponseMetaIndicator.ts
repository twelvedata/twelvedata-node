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
 * @interface GetTimeSeriesPlusDI200ResponseMetaIndicator
 */
export interface GetTimeSeriesPlusDI200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesPlusDI200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesPlusDI200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDI200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesPlusDI200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesPlusDI200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesPlusDI200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseMetaIndicator {
  return GetTimeSeriesPlusDI200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDI200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesPlusDI200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesPlusDI200ResponseMetaIndicator {
  return GetTimeSeriesPlusDI200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDI200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesPlusDI200ResponseMetaIndicator | null,
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
