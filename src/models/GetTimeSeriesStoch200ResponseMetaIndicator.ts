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
 * @interface GetTimeSeriesStoch200ResponseMetaIndicator
 */
export interface GetTimeSeriesStoch200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMetaIndicator
   */
  name: string;
  /**
   * The time period for the fast %K line in the Stochastic Oscillator
   * @type {number}
   * @memberof GetTimeSeriesStoch200ResponseMetaIndicator
   */
  fastKPeriod: number;
  /**
   * The time period for the slow %K line in the Stochastic Oscillator
   * @type {number}
   * @memberof GetTimeSeriesStoch200ResponseMetaIndicator
   */
  slowKPeriod: number;
  /**
   * The time period for the slow %D line in the Stochastic Oscillator
   * @type {number}
   * @memberof GetTimeSeriesStoch200ResponseMetaIndicator
   */
  slowDPeriod: number;
  /**
   * The type of slow %K Moving Average used
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMetaIndicator
   */
  slowKmaType: string;
  /**
   * The type of slow Displaced Moving Average used
   * @type {string}
   * @memberof GetTimeSeriesStoch200ResponseMetaIndicator
   */
  slowDmaType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStoch200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesStoch200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesStoch200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("fastKPeriod" in value) || value["fastKPeriod"] === undefined)
    return false;
  if (!("slowKPeriod" in value) || value["slowKPeriod"] === undefined)
    return false;
  if (!("slowDPeriod" in value) || value["slowDPeriod"] === undefined)
    return false;
  if (!("slowKmaType" in value) || value["slowKmaType"] === undefined)
    return false;
  if (!("slowDmaType" in value) || value["slowDmaType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesStoch200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesStoch200ResponseMetaIndicator {
  return GetTimeSeriesStoch200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStoch200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    fastKPeriod: json["fast_k_period"],
    slowKPeriod: json["slow_k_period"],
    slowDPeriod: json["slow_d_period"],
    slowKmaType: json["slow_kma_type"],
    slowDmaType: json["slow_dma_type"],
  };
}

export function GetTimeSeriesStoch200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesStoch200ResponseMetaIndicator {
  return GetTimeSeriesStoch200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesStoch200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    fast_k_period: value["fastKPeriod"],
    slow_k_period: value["slowKPeriod"],
    slow_d_period: value["slowDPeriod"],
    slow_kma_type: value["slowKmaType"],
    slow_dma_type: value["slowDmaType"],
  };
}
