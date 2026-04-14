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
 * @interface GetTimeSeriesMidPoint200ResponseMetaIndicator
 */
export interface GetTimeSeriesMidPoint200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMidPoint200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMidPoint200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPoint200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMidPoint200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMidPoint200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMidPoint200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMidPoint200ResponseMetaIndicator {
  return GetTimeSeriesMidPoint200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMidPoint200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPoint200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMidPoint200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMidPoint200ResponseMetaIndicator {
  return GetTimeSeriesMidPoint200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMidPoint200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMidPoint200ResponseMetaIndicator | null,
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
