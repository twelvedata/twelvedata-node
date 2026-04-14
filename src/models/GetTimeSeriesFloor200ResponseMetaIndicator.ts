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
 * @interface GetTimeSeriesFloor200ResponseMetaIndicator
 */
export interface GetTimeSeriesFloor200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesFloor200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesFloor200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesFloor200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesFloor200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesFloor200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesFloor200ResponseMetaIndicator {
  return GetTimeSeriesFloor200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesFloor200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesFloor200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesFloor200ResponseMetaIndicator {
  return GetTimeSeriesFloor200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesFloor200ResponseMetaIndicator | null,
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
