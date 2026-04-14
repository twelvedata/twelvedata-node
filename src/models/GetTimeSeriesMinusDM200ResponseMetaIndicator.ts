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
 * @interface GetTimeSeriesMinusDM200ResponseMetaIndicator
 */
export interface GetTimeSeriesMinusDM200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesMinusDM200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDM200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMinusDM200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMinusDM200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMinusDM200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseMetaIndicator {
  return GetTimeSeriesMinusDM200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDM200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMinusDM200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMinusDM200ResponseMetaIndicator {
  return GetTimeSeriesMinusDM200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMinusDM200ResponseMetaIndicator | null,
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
