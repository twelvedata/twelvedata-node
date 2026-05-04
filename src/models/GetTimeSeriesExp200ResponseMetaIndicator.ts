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
 * @interface GetTimeSeriesExp200ResponseMetaIndicator
 */
export interface GetTimeSeriesExp200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesExp200ResponseMetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesExp200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesExp200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesExp200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesExp200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesExp200ResponseMetaIndicator {
  return GetTimeSeriesExp200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesExp200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function GetTimeSeriesExp200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesExp200ResponseMetaIndicator {
  return GetTimeSeriesExp200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesExp200ResponseMetaIndicator | null,
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
