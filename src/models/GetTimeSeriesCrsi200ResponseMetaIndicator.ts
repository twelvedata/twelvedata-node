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
 * @interface GetTimeSeriesCrsi200ResponseMetaIndicator
 */
export interface GetTimeSeriesCrsi200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesCrsi200ResponseMetaIndicator
   */
  seriesType: string;
  /**
   * Number of periods for RSI used to calculate price momentum
   * @type {number}
   * @memberof GetTimeSeriesCrsi200ResponseMetaIndicator
   */
  rsiPeriod: number;
  /**
   * Number of periods for RSI used to calculate up/down trend
   * @type {number}
   * @memberof GetTimeSeriesCrsi200ResponseMetaIndicator
   */
  upDownLength: number;
  /**
   * Number of periods used to calculate PercentRank
   * @type {number}
   * @memberof GetTimeSeriesCrsi200ResponseMetaIndicator
   */
  percentRankPeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesCrsi200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesCrsi200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesCrsi200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  if (!("rsiPeriod" in value) || value["rsiPeriod"] === undefined) return false;
  if (!("upDownLength" in value) || value["upDownLength"] === undefined)
    return false;
  if (
    !("percentRankPeriod" in value) ||
    value["percentRankPeriod"] === undefined
  )
    return false;
  return true;
}

export function GetTimeSeriesCrsi200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseMetaIndicator {
  return GetTimeSeriesCrsi200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCrsi200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
    rsiPeriod: json["rsi_period"],
    upDownLength: json["up_down_length"],
    percentRankPeriod: json["percent_rank_period"],
  };
}

export function GetTimeSeriesCrsi200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesCrsi200ResponseMetaIndicator {
  return GetTimeSeriesCrsi200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesCrsi200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesCrsi200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    rsi_period: value["rsiPeriod"],
    up_down_length: value["upDownLength"],
    percent_rank_period: value["percentRankPeriod"],
  };
}
