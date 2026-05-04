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
 * @interface GetTimeSeriesDema200ResponseMetaIndicator
 */
export interface GetTimeSeriesDema200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesDema200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesDema200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesDema200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesDema200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesDema200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesDema200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesDema200ResponseMetaIndicator {
  return GetTimeSeriesDema200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDema200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesDema200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesDema200ResponseMetaIndicator {
  return GetTimeSeriesDema200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesDema200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
  };
}
