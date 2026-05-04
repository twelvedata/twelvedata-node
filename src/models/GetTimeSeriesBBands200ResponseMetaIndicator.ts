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
 * @interface GetTimeSeriesBBands200ResponseMetaIndicator
 */
export interface GetTimeSeriesBBands200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesBBands200ResponseMetaIndicator
   */
  timePeriod: number;
  /**
   * Number of standard deviations
   * @type {number}
   * @memberof GetTimeSeriesBBands200ResponseMetaIndicator
   */
  sd: number;
  /**
   * Moving average type
   * @type {string}
   * @memberof GetTimeSeriesBBands200ResponseMetaIndicator
   */
  maType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBBands200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesBBands200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesBBands200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  if (!("sd" in value) || value["sd"] === undefined) return false;
  if (!("maType" in value) || value["maType"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBBands200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesBBands200ResponseMetaIndicator {
  return GetTimeSeriesBBands200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBBands200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
    sd: json["sd"],
    maType: json["ma_type"],
  };
}

export function GetTimeSeriesBBands200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesBBands200ResponseMetaIndicator {
  return GetTimeSeriesBBands200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesBBands200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesBBands200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
    sd: value["sd"],
    ma_type: value["maType"],
  };
}
