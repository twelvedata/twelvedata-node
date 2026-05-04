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
 * @interface GetTimeSeriesCci200ResponseMetaIndicator
 */
export interface GetTimeSeriesCci200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesCci200ResponseMetaIndicator
   */
  name: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesCci200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesCci200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesCci200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesCci200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesCci200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesCci200ResponseMetaIndicator {
  return GetTimeSeriesCci200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCci200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesCci200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesCci200ResponseMetaIndicator {
  return GetTimeSeriesCci200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesCci200ResponseMetaIndicator | null,
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
