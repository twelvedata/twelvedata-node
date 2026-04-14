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
 * @interface GetTimeSeriesHtDcPhase200ResponseMetaIndicator
 */
export interface GetTimeSeriesHtDcPhase200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPhase200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHtDcPhase200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHtDcPhase200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesHtDcPhase200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHtDcPhase200ResponseMetaIndicator {
  return GetTimeSeriesHtDcPhase200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtDcPhase200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPhase200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesHtDcPhase200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHtDcPhase200ResponseMetaIndicator {
  return GetTimeSeriesHtDcPhase200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHtDcPhase200ResponseMetaIndicator | null,
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
