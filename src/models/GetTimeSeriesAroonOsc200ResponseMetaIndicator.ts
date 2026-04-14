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
 * @interface GetTimeSeriesAroonOsc200ResponseMetaIndicator
 */
export interface GetTimeSeriesAroonOsc200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesAroonOsc200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAroonOsc200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAroonOsc200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAroonOsc200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesAroonOsc200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseMetaIndicator {
  return GetTimeSeriesAroonOsc200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesAroonOsc200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroonOsc200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesAroonOsc200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAroonOsc200ResponseMetaIndicator {
  return GetTimeSeriesAroonOsc200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAroonOsc200ResponseMetaIndicator | null,
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
