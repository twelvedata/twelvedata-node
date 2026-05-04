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
 * @interface GetTimeSeriesT3ma200ResponseMetaIndicator
 */
export interface GetTimeSeriesT3ma200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesT3ma200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesT3ma200ResponseMetaIndicator
   */
  timePeriod: number;
  /**
   * The factor used to adjust the indicator's volatility
   * @type {number}
   * @memberof GetTimeSeriesT3ma200ResponseMetaIndicator
   */
  vFactor: number;
}

/**
 * Check if a given object implements the GetTimeSeriesT3ma200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesT3ma200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesT3ma200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  if (!("vFactor" in value) || value["vFactor"] === undefined) return false;
  return true;
}

export function GetTimeSeriesT3ma200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesT3ma200ResponseMetaIndicator {
  return GetTimeSeriesT3ma200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesT3ma200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    timePeriod: json["time_period"],
    vFactor: json["v_factor"],
  };
}

export function GetTimeSeriesT3ma200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesT3ma200ResponseMetaIndicator {
  return GetTimeSeriesT3ma200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesT3ma200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesT3ma200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
    v_factor: value["vFactor"],
  };
}
