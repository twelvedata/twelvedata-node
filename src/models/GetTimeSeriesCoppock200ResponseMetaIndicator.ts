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
 * @interface GetTimeSeriesCoppock200ResponseMetaIndicator
 */
export interface GetTimeSeriesCoppock200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesCoppock200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods for weighted moving average
   * @type {number}
   * @memberof GetTimeSeriesCoppock200ResponseMetaIndicator
   */
  wmaPeriod: number;
  /**
   * Number of periods for long term rate of change
   * @type {number}
   * @memberof GetTimeSeriesCoppock200ResponseMetaIndicator
   */
  longRocPeriod: number;
  /**
   * Number of periods for short term rate of change
   * @type {number}
   * @memberof GetTimeSeriesCoppock200ResponseMetaIndicator
   */
  shortRocPeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesCoppock200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesCoppock200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesCoppock200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("wmaPeriod" in value) || value["wmaPeriod"] === undefined) return false;
  if (!("longRocPeriod" in value) || value["longRocPeriod"] === undefined)
    return false;
  if (!("shortRocPeriod" in value) || value["shortRocPeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesCoppock200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesCoppock200ResponseMetaIndicator {
  return GetTimeSeriesCoppock200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCoppock200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    wmaPeriod: json["wma_period"],
    longRocPeriod: json["long_roc_period"],
    shortRocPeriod: json["short_roc_period"],
  };
}

export function GetTimeSeriesCoppock200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesCoppock200ResponseMetaIndicator {
  return GetTimeSeriesCoppock200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesCoppock200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesCoppock200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    wma_period: value["wmaPeriod"],
    long_roc_period: value["longRocPeriod"],
    short_roc_period: value["shortRocPeriod"],
  };
}
