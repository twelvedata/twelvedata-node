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
 * @interface GetTimeSeriesLinearRegSlope200ResponseMetaIndicator
 */
export interface GetTimeSeriesLinearRegSlope200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesLinearRegSlope200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegSlope200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesLinearRegSlope200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesLinearRegSlope200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesLinearRegSlope200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesLinearRegSlope200ResponseMetaIndicator {
  return GetTimeSeriesLinearRegSlope200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegSlope200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegSlope200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesLinearRegSlope200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesLinearRegSlope200ResponseMetaIndicator {
  return GetTimeSeriesLinearRegSlope200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegSlope200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesLinearRegSlope200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
  };
}
