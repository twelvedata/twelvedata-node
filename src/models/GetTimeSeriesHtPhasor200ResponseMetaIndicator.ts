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
 * @interface GetTimeSeriesHtPhasor200ResponseMetaIndicator
 */
export interface GetTimeSeriesHtPhasor200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseMetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtPhasor200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHtPhasor200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHtPhasor200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtPhasor200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHtPhasor200ResponseMetaIndicator {
  return GetTimeSeriesHtPhasor200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtPhasor200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtPhasor200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function GetTimeSeriesHtPhasor200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHtPhasor200ResponseMetaIndicator {
  return GetTimeSeriesHtPhasor200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHtPhasor200ResponseMetaIndicator | null,
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
