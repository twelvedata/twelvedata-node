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
 * @interface GetTimeSeriesDpo200ResponseMetaIndicator
 */
export interface GetTimeSeriesDpo200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesDpo200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesDpo200ResponseMetaIndicator
   */
  timePeriod: number;
  /**
   * Specifies if there should be a shift to match the current price
   * @type {boolean}
   * @memberof GetTimeSeriesDpo200ResponseMetaIndicator
   */
  centered: boolean;
}

/**
 * Check if a given object implements the GetTimeSeriesDpo200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesDpo200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesDpo200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  if (!("centered" in value) || value["centered"] === undefined) return false;
  return true;
}

export function GetTimeSeriesDpo200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesDpo200ResponseMetaIndicator {
  return GetTimeSeriesDpo200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDpo200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
    centered: json["centered"],
  };
}

export function GetTimeSeriesDpo200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesDpo200ResponseMetaIndicator {
  return GetTimeSeriesDpo200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesDpo200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesDpo200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
    centered: value["centered"],
  };
}
