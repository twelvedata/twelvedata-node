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
 * @interface GetTimeSeriesHtTrendline200ResponseMetaIndicator
 */
export interface GetTimeSeriesHtTrendline200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesHtTrendline200ResponseMetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendline200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHtTrendline200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHtTrendline200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtTrendline200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHtTrendline200ResponseMetaIndicator {
  return GetTimeSeriesHtTrendline200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtTrendline200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendline200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function GetTimeSeriesHtTrendline200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHtTrendline200ResponseMetaIndicator {
  return GetTimeSeriesHtTrendline200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtTrendline200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHtTrendline200ResponseMetaIndicator | null,
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
