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
 * @interface GetTimeSeriesStochRsi200ResponseMetaIndicator
 */
export interface GetTimeSeriesStochRsi200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Length of period for calculating the RSI component
   * @type {number}
   * @memberof GetTimeSeriesStochRsi200ResponseMetaIndicator
   */
  rsiLength?: number;
  /**
   * Period length for computing the stochastic oscillator of the RSI
   * @type {number}
   * @memberof GetTimeSeriesStochRsi200ResponseMetaIndicator
   */
  stochLength?: number;
  /**
   * Period for smoothing the %K line
   * @type {number}
   * @memberof GetTimeSeriesStochRsi200ResponseMetaIndicator
   */
  kPeriod?: number;
  /**
   * Period for smoothing the %D line, which is a moving average of %K
   * @type {number}
   * @memberof GetTimeSeriesStochRsi200ResponseMetaIndicator
   */
  dPeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesStochRsi200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesStochRsi200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesStochRsi200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesStochRsi200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesStochRsi200ResponseMetaIndicator {
  return GetTimeSeriesStochRsi200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesStochRsi200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochRsi200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    rsiLength: json["rsi_length"] == null ? undefined : json["rsi_length"],
    stochLength:
      json["stoch_length"] == null ? undefined : json["stoch_length"],
    kPeriod: json["k_period"] == null ? undefined : json["k_period"],
    dPeriod: json["d_period"] == null ? undefined : json["d_period"],
  };
}

export function GetTimeSeriesStochRsi200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesStochRsi200ResponseMetaIndicator {
  return GetTimeSeriesStochRsi200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesStochRsi200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    rsi_length: value["rsiLength"],
    stoch_length: value["stochLength"],
    k_period: value["kPeriod"],
    d_period: value["dPeriod"],
  };
}
