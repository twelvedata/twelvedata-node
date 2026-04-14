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
 * @interface GetTimeSeriesMinIndex200ResponseMetaIndicator
 */
export interface GetTimeSeriesMinIndex200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMinIndex200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMinIndex200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMinIndex200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMinIndex200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMinIndex200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMinIndex200ResponseMetaIndicator {
  return GetTimeSeriesMinIndex200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMinIndex200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinIndex200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMinIndex200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMinIndex200ResponseMetaIndicator {
  return GetTimeSeriesMinIndex200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMinIndex200ResponseMetaIndicator | null,
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
