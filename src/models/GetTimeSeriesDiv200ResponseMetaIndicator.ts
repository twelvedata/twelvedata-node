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
 * @interface GetTimeSeriesDiv200ResponseMetaIndicator
 */
export interface GetTimeSeriesDiv200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type used as the first part of technical indicator
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMetaIndicator
   */
  seriesType1?: string;
  /**
   * Price type used as the second part of technical indicator
   * @type {string}
   * @memberof GetTimeSeriesDiv200ResponseMetaIndicator
   */
  seriesType2?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDiv200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesDiv200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesDiv200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesDiv200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesDiv200ResponseMetaIndicator {
  return GetTimeSeriesDiv200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDiv200ResponseMetaIndicator {
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

export function GetTimeSeriesDiv200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesDiv200ResponseMetaIndicator {
  return GetTimeSeriesDiv200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesDiv200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesDiv200ResponseMetaIndicator | null,
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
