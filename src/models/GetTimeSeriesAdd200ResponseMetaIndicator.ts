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
 * @interface GetTimeSeriesAdd200ResponseMetaIndicator
 */
export interface GetTimeSeriesAdd200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type used as the first part of technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMetaIndicator
   */
  seriesType1?: string;
  /**
   * Price type used as the second part of technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAdd200ResponseMetaIndicator
   */
  seriesType2?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdd200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAdd200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAdd200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesAdd200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAdd200ResponseMetaIndicator {
  return GetTimeSeriesAdd200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdd200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType1:
      json["series_type_1"] == null ? undefined : json["series_type_1"],
    seriesType2:
      json["series_type_2"] == null ? undefined : json["series_type_2"],
  };
}

export function GetTimeSeriesAdd200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAdd200ResponseMetaIndicator {
  return GetTimeSeriesAdd200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAdd200ResponseMetaIndicator | null,
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
