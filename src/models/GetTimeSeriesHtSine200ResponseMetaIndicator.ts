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
 * @interface GetTimeSeriesHtSine200ResponseMetaIndicator
 */
export interface GetTimeSeriesHtSine200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesHtSine200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtSine200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHtSine200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHtSine200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesHtSine200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHtSine200ResponseMetaIndicator {
  return GetTimeSeriesHtSine200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtSine200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesHtSine200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHtSine200ResponseMetaIndicator {
  return GetTimeSeriesHtSine200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesHtSine200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHtSine200ResponseMetaIndicator | null,
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
