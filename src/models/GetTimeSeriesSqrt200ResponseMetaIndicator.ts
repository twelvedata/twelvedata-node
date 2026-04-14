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
 * @interface GetTimeSeriesSqrt200ResponseMetaIndicator
 */
export interface GetTimeSeriesSqrt200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesSqrt200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSqrt200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSqrt200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSqrt200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesSqrt200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSqrt200ResponseMetaIndicator {
  return GetTimeSeriesSqrt200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSqrt200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesSqrt200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSqrt200ResponseMetaIndicator {
  return GetTimeSeriesSqrt200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesSqrt200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSqrt200ResponseMetaIndicator | null,
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
