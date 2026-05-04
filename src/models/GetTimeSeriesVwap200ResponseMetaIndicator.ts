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
 * @interface GetTimeSeriesVwap200ResponseMetaIndicator
 */
export interface GetTimeSeriesVwap200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesVwap200ResponseMetaIndicator
   */
  name: string;
  /**
   * Standard deviation time period
   * @type {number}
   * @memberof GetTimeSeriesVwap200ResponseMetaIndicator
   */
  sdTimePeriod?: number;
  /**
   * Standard deviation value
   * @type {number}
   * @memberof GetTimeSeriesVwap200ResponseMetaIndicator
   */
  sd?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesVwap200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesVwap200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesVwap200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function GetTimeSeriesVwap200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesVwap200ResponseMetaIndicator {
  return GetTimeSeriesVwap200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesVwap200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesVwap200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    sdTimePeriod:
      json["sd_time_period"] == null ? undefined : json["sd_time_period"],
    sd: json["sd"] == null ? undefined : json["sd"],
  };
}

export function GetTimeSeriesVwap200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesVwap200ResponseMetaIndicator {
  return GetTimeSeriesVwap200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesVwap200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesVwap200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    sd_time_period: value["sdTimePeriod"],
    sd: value["sd"],
  };
}
