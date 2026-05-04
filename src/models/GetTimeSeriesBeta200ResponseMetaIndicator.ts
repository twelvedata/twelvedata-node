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
 * @interface GetTimeSeriesBeta200ResponseMetaIndicator
 */
export interface GetTimeSeriesBeta200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type used as the first part of technical indicator
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseMetaIndicator
   */
  seriesType1: string;
  /**
   * Price type used as the second part of technical indicator
   * @type {string}
   * @memberof GetTimeSeriesBeta200ResponseMetaIndicator
   */
  seriesType2: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesBeta200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesBeta200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesBeta200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesBeta200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType1" in value) || value["seriesType1"] === undefined)
    return false;
  if (!("seriesType2" in value) || value["seriesType2"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesBeta200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesBeta200ResponseMetaIndicator {
  return GetTimeSeriesBeta200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBeta200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType1: json["series_type_1"],
    seriesType2: json["series_type_2"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesBeta200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesBeta200ResponseMetaIndicator {
  return GetTimeSeriesBeta200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesBeta200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesBeta200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type_1: value["seriesType1"],
    series_type_2: value["seriesType2"],
    time_period: value["timePeriod"],
  };
}
