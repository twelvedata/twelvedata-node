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
 * @interface GetTimeSeriesMaxIndex200ResponseMetaIndicator
 */
export interface GetTimeSeriesMaxIndex200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMaxIndex200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMaxIndex200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMaxIndex200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMaxIndex200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMaxIndex200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseMetaIndicator {
  return GetTimeSeriesMaxIndex200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMaxIndex200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMaxIndex200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesMaxIndex200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMaxIndex200ResponseMetaIndicator {
  return GetTimeSeriesMaxIndex200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMaxIndex200ResponseMetaIndicator | null,
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
