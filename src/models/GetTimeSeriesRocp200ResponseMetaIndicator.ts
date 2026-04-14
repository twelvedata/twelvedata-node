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
 * @interface GetTimeSeriesRocp200ResponseMetaIndicator
 */
export interface GetTimeSeriesRocp200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesRocp200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesRocp200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesRocp200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesRocp200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesRocp200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesRocp200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesRocp200ResponseMetaIndicator {
  return GetTimeSeriesRocp200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocp200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesRocp200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesRocp200ResponseMetaIndicator {
  return GetTimeSeriesRocp200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesRocp200ResponseMetaIndicator | null,
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
