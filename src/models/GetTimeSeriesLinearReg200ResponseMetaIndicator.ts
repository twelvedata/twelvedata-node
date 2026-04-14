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
 * @interface GetTimeSeriesLinearReg200ResponseMetaIndicator
 */
export interface GetTimeSeriesLinearReg200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesLinearReg200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesLinearReg200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearReg200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesLinearReg200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesLinearReg200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesLinearReg200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesLinearReg200ResponseMetaIndicator {
  return GetTimeSeriesLinearReg200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearReg200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearReg200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesLinearReg200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesLinearReg200ResponseMetaIndicator {
  return GetTimeSeriesLinearReg200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesLinearReg200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesLinearReg200ResponseMetaIndicator | null,
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
