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
 * @interface GetTimeSeriesStochF200ResponseMetaIndicator
 */
export interface GetTimeSeriesStochF200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMetaIndicator
   */
  name: string;
  /**
   * The fast_k period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesStochF200ResponseMetaIndicator
   */
  fastKPeriod: number;
  /**
   * The fast_d period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesStochF200ResponseMetaIndicator
   */
  fastDPeriod: number;
  /**
   * The type of fast Displaced Moving Average used
   * @type {string}
   * @memberof GetTimeSeriesStochF200ResponseMetaIndicator
   */
  fastDmaType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStochF200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesStochF200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesStochF200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("fastKPeriod" in value) || value["fastKPeriod"] === undefined)
    return false;
  if (!("fastDPeriod" in value) || value["fastDPeriod"] === undefined)
    return false;
  if (!("fastDmaType" in value) || value["fastDmaType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesStochF200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesStochF200ResponseMetaIndicator {
  return GetTimeSeriesStochF200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochF200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    fastKPeriod: json["fast_k_period"],
    fastDPeriod: json["fast_d_period"],
    fastDmaType: json["fast_dma_type"],
  };
}

export function GetTimeSeriesStochF200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesStochF200ResponseMetaIndicator {
  return GetTimeSeriesStochF200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesStochF200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    fast_k_period: value["fastKPeriod"],
    fast_d_period: value["fastDPeriod"],
    fast_dma_type: value["fastDmaType"],
  };
}
