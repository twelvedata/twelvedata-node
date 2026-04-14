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
 * @interface GetTimeSeriesMinMaxIndex200ResponseMetaIndicator
 */
export interface GetTimeSeriesMinMaxIndex200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMinMaxIndex200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMaxIndex200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMinMaxIndex200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMinMaxIndex200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200ResponseMetaIndicator {
  return GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMaxIndex200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200ResponseMetaIndicator {
  return GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMinMaxIndex200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMinMaxIndex200ResponseMetaIndicator | null,
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
