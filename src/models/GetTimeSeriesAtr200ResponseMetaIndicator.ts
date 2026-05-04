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
 * @interface GetTimeSeriesAtr200ResponseMetaIndicator
 */
export interface GetTimeSeriesAtr200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAtr200ResponseMetaIndicator
   */
  name: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesAtr200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesAtr200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAtr200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAtr200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesAtr200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAtr200ResponseMetaIndicator {
  return GetTimeSeriesAtr200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAtr200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesAtr200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAtr200ResponseMetaIndicator {
  return GetTimeSeriesAtr200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAtr200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAtr200ResponseMetaIndicator | null,
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
