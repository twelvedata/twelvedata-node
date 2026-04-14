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
 * @interface GetTimeSeriesMfi200ResponseMetaIndicator
 */
export interface GetTimeSeriesMfi200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMfi200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMfi200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMfi200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMfi200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMfi200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMfi200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMfi200ResponseMetaIndicator {
  return GetTimeSeriesMfi200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMfi200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMfi200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMfi200ResponseMetaIndicator {
  return GetTimeSeriesMfi200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMfi200ResponseMetaIndicator | null,
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
