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
 * @interface GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator
 */
export interface GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator
   */
  name: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHeikinashiCandles200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator {
  return GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator {
  return GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHeikinashiCandles200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHeikinashiCandles200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
