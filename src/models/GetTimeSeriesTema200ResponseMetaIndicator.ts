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
 * @interface GetTimeSeriesTema200ResponseMetaIndicator
 */
export interface GetTimeSeriesTema200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesTema200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesTema200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesTema200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesTema200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesTema200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesTema200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesTema200ResponseMetaIndicator {
  return GetTimeSeriesTema200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTema200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesTema200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesTema200ResponseMetaIndicator {
  return GetTimeSeriesTema200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesTema200ResponseMetaIndicator | null,
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
