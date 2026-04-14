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
 * @interface GetTimeSeriesPlusDM200ResponseMetaIndicator
 */
export interface GetTimeSeriesPlusDM200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesPlusDM200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDM200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesPlusDM200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesPlusDM200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesPlusDM200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesPlusDM200ResponseMetaIndicator {
  return GetTimeSeriesPlusDM200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDM200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesPlusDM200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesPlusDM200ResponseMetaIndicator {
  return GetTimeSeriesPlusDM200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesPlusDM200ResponseMetaIndicator | null,
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
