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
 * @interface GetTimeSeriesRvol200ResponseMetaIndicator
 */
export interface GetTimeSeriesRvol200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesRvol200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesRvol200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesRvol200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesRvol200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesRvol200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesRvol200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesRvol200ResponseMetaIndicator {
  return GetTimeSeriesRvol200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRvol200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesRvol200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesRvol200ResponseMetaIndicator {
  return GetTimeSeriesRvol200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesRvol200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    time_period: value["timePeriod"],
  };
}
