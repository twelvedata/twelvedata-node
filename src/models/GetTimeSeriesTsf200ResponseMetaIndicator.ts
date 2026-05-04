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
 * @interface GetTimeSeriesTsf200ResponseMetaIndicator
 */
export interface GetTimeSeriesTsf200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesTsf200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesTsf200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesTsf200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesTsf200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesTsf200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesTsf200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesTsf200ResponseMetaIndicator {
  return GetTimeSeriesTsf200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTsf200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesTsf200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesTsf200ResponseMetaIndicator {
  return GetTimeSeriesTsf200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesTsf200ResponseMetaIndicator | null,
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
