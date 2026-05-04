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
 * @interface GetTimeSeriesSub200ResponseMetaIndicator
 */
export interface GetTimeSeriesSub200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMetaIndicator
   */
  name: string;
  /**
   * First price data type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMetaIndicator
   */
  seriesType1: string;
  /**
   * Second price data type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesSub200ResponseMetaIndicator
   */
  seriesType2: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSub200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSub200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSub200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType1" in value) || value["seriesType1"] === undefined)
    return false;
  if (!("seriesType2" in value) || value["seriesType2"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesSub200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSub200ResponseMetaIndicator {
  return GetTimeSeriesSub200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSub200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType1: json["series_type_1"],
    seriesType2: json["series_type_2"],
  };
}

export function GetTimeSeriesSub200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSub200ResponseMetaIndicator {
  return GetTimeSeriesSub200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesSub200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSub200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type_1: value["seriesType1"],
    series_type_2: value["seriesType2"],
  };
}
