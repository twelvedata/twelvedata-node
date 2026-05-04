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
 * @interface GetTimeSeriesLn200ResponseMetaIndicator
 */
export interface GetTimeSeriesLn200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesLn200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesLn200ResponseMetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLn200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesLn200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesLn200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesLn200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesLn200ResponseMetaIndicator {
  return GetTimeSeriesLn200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesLn200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLn200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function GetTimeSeriesLn200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesLn200ResponseMetaIndicator {
  return GetTimeSeriesLn200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesLn200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesLn200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
  };
}
