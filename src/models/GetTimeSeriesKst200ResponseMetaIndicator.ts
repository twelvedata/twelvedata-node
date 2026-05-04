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
 * @interface GetTimeSeriesKst200ResponseMetaIndicator
 */
export interface GetTimeSeriesKst200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  name: string;
  /**
   * The time period for the first Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod1: number;
  /**
   * The time period for the second Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod2: number;
  /**
   * The time period for the third Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod3: number;
  /**
   * The time period for the forth Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod4: number;
  /**
   * The time period for the first Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod1: number;
  /**
   * The time period for the second Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod2: number;
  /**
   * The time period for the third Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod3: number;
  /**
   * The time period for the forth Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod4: number;
  /**
   * The time period used for generating the signal line
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  signalPeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesKst200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesKst200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesKst200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("rocPeriod1" in value) || value["rocPeriod1"] === undefined)
    return false;
  if (!("rocPeriod2" in value) || value["rocPeriod2"] === undefined)
    return false;
  if (!("rocPeriod3" in value) || value["rocPeriod3"] === undefined)
    return false;
  if (!("rocPeriod4" in value) || value["rocPeriod4"] === undefined)
    return false;
  if (!("smaPeriod1" in value) || value["smaPeriod1"] === undefined)
    return false;
  if (!("smaPeriod2" in value) || value["smaPeriod2"] === undefined)
    return false;
  if (!("smaPeriod3" in value) || value["smaPeriod3"] === undefined)
    return false;
  if (!("smaPeriod4" in value) || value["smaPeriod4"] === undefined)
    return false;
  if (!("signalPeriod" in value) || value["signalPeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesKst200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesKst200ResponseMetaIndicator {
  return GetTimeSeriesKst200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKst200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    rocPeriod1: json["roc_period_1"],
    rocPeriod2: json["roc_period_2"],
    rocPeriod3: json["roc_period_3"],
    rocPeriod4: json["roc_period_4"],
    smaPeriod1: json["sma_period_1"],
    smaPeriod2: json["sma_period_2"],
    smaPeriod3: json["sma_period_3"],
    smaPeriod4: json["sma_period_4"],
    signalPeriod: json["signal_period"],
  };
}

export function GetTimeSeriesKst200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesKst200ResponseMetaIndicator {
  return GetTimeSeriesKst200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesKst200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    roc_period_1: value["rocPeriod1"],
    roc_period_2: value["rocPeriod2"],
    roc_period_3: value["rocPeriod3"],
    roc_period_4: value["rocPeriod4"],
    sma_period_1: value["smaPeriod1"],
    sma_period_2: value["smaPeriod2"],
    sma_period_3: value["smaPeriod3"],
    sma_period_4: value["smaPeriod4"],
    signal_period: value["signalPeriod"],
  };
}
