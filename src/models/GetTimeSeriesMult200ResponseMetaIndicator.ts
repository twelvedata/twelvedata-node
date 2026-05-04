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
 * @interface GetTimeSeriesMult200ResponseMetaIndicator
 */
export interface GetTimeSeriesMult200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMetaIndicator
   */
  name: string;
  /**
   * Specifies the first price data type
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMetaIndicator
   */
  seriesType1: string;
  /**
   * Specifies the second price data type
   * @type {string}
   * @memberof GetTimeSeriesMult200ResponseMetaIndicator
   */
  seriesType2: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMult200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMult200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMult200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType1" in value) || value["seriesType1"] === undefined)
    return false;
  if (!("seriesType2" in value) || value["seriesType2"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMult200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMult200ResponseMetaIndicator {
  return GetTimeSeriesMult200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMult200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType1: json["series_type_1"],
    seriesType2: json["series_type_2"],
  };
}

export function GetTimeSeriesMult200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMult200ResponseMetaIndicator {
  return GetTimeSeriesMult200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMult200ResponseMetaIndicator | null,
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
