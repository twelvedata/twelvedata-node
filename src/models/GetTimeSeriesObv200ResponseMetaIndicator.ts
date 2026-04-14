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
 * @interface GetTimeSeriesObv200ResponseMetaIndicator
 */
export interface GetTimeSeriesObv200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesObv200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesObv200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesObv200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesObv200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesObv200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesObv200ResponseMetaIndicator {
  return GetTimeSeriesObv200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesObv200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesObv200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesObv200ResponseMetaIndicator {
  return GetTimeSeriesObv200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesObv200ResponseMetaIndicator | null,
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
