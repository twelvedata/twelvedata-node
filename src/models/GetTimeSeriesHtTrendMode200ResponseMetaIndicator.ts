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
 * @interface GetTimeSeriesHtTrendMode200ResponseMetaIndicator
 */
export interface GetTimeSeriesHtTrendMode200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendMode200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHtTrendMode200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHtTrendMode200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesHtTrendMode200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHtTrendMode200ResponseMetaIndicator {
  return GetTimeSeriesHtTrendMode200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtTrendMode200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendMode200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesHtTrendMode200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHtTrendMode200ResponseMetaIndicator {
  return GetTimeSeriesHtTrendMode200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtTrendMode200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHtTrendMode200ResponseMetaIndicator | null,
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
