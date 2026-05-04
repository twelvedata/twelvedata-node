/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetTimeSeriesHtPhasor200ResponseValuesInner
 */
export interface GetTimeSeriesHtPhasor200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseValuesInner
   */
  datetime: string;
  /**
   * In_phase value
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseValuesInner
   */
  inPhase: string;
  /**
   * Quadrature value
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200ResponseValuesInner
   */
  quadrature: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtPhasor200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHtPhasor200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHtPhasor200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("inPhase" in value) || value["inPhase"] === undefined) return false;
  if (!("quadrature" in value) || value["quadrature"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtPhasor200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHtPhasor200ResponseValuesInner {
  return GetTimeSeriesHtPhasor200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtPhasor200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    inPhase: json["in_phase"],
    quadrature: json["quadrature"],
  };
}

export function GetTimeSeriesHtPhasor200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHtPhasor200ResponseValuesInner {
  return GetTimeSeriesHtPhasor200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHtPhasor200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    in_phase: value["inPhase"],
    quadrature: value["quadrature"],
  };
}
