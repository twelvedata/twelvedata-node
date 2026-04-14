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
  name?: string;
  /**
   * The time period for the first Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod1?: number;
  /**
   * The time period for the second Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod2?: number;
  /**
   * The time period for the third Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod3?: number;
  /**
   * The time period for the forth Rate of Change calculation
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  rocPeriod4?: number;
  /**
   * The time period for the first Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod1?: number;
  /**
   * The time period for the second Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod2?: number;
  /**
   * The time period for the third Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod3?: number;
  /**
   * The time period for the forth Simple Moving Average
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  smaPeriod4?: number;
  /**
   * The time period used for generating the signal line
   * @type {number}
   * @memberof GetTimeSeriesKst200ResponseMetaIndicator
   */
  signalPeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesKst200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesKst200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesKst200ResponseMetaIndicator {
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
    name: json["name"] == null ? undefined : json["name"],
    rocPeriod1: json["roc_period_1"] == null ? undefined : json["roc_period_1"],
    rocPeriod2: json["roc_period_2"] == null ? undefined : json["roc_period_2"],
    rocPeriod3: json["roc_period_3"] == null ? undefined : json["roc_period_3"],
    rocPeriod4: json["roc_period_4"] == null ? undefined : json["roc_period_4"],
    smaPeriod1: json["sma_period_1"] == null ? undefined : json["sma_period_1"],
    smaPeriod2: json["sma_period_2"] == null ? undefined : json["sma_period_2"],
    smaPeriod3: json["sma_period_3"] == null ? undefined : json["sma_period_3"],
    smaPeriod4: json["sma_period_4"] == null ? undefined : json["sma_period_4"],
    signalPeriod:
      json["signal_period"] == null ? undefined : json["signal_period"],
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
