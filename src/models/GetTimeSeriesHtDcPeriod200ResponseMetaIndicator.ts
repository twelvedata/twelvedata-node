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
 * @interface GetTimeSeriesHtDcPeriod200ResponseMetaIndicator
 */
export interface GetTimeSeriesHtDcPeriod200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPeriod200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHtDcPeriod200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHtDcPeriod200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200ResponseMetaIndicator {
  return GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPeriod200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200ResponseMetaIndicator {
  return GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHtDcPeriod200ResponseMetaIndicator | null,
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
