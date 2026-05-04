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
 * @interface GetTimeSeriesLog10200ResponseMetaIndicator
 */
export interface GetTimeSeriesLog10200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesLog10200ResponseMetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLog10200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesLog10200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesLog10200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesLog10200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesLog10200ResponseMetaIndicator {
  return GetTimeSeriesLog10200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLog10200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function GetTimeSeriesLog10200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesLog10200ResponseMetaIndicator {
  return GetTimeSeriesLog10200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesLog10200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesLog10200ResponseMetaIndicator | null,
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
