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
 * @interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator
 */
export interface GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator
   */
  name: string;
  /**
   * The period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator
   */
  period: number;
  /**
   * The multiplier used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator
   */
  multiplier: number;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("period" in value) || value["period"] === undefined) return false;
  if (!("multiplier" in value) || value["multiplier"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    period: json["period"],
    multiplier: json["multiplier"],
  };
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator {
  return GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    period: value["period"],
    multiplier: value["multiplier"],
  };
}
