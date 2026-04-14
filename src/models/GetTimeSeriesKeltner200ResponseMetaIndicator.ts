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
 * @interface GetTimeSeriesKeltner200ResponseMetaIndicator
 */
export interface GetTimeSeriesKeltner200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesKeltner200ResponseMetaIndicator
   */
  timePeriod?: number;
  /**
   * The time period used for calculating the Average True Range
   * @type {number}
   * @memberof GetTimeSeriesKeltner200ResponseMetaIndicator
   */
  atrTimePeriod?: number;
  /**
   * The factor used to adjust the indicator's sensitivity
   * @type {number}
   * @memberof GetTimeSeriesKeltner200ResponseMetaIndicator
   */
  multiplier?: number;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The type of moving average used
   * @type {string}
   * @memberof GetTimeSeriesKeltner200ResponseMetaIndicator
   */
  maType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKeltner200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesKeltner200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesKeltner200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesKeltner200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesKeltner200ResponseMetaIndicator {
  return GetTimeSeriesKeltner200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKeltner200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
    atrTimePeriod:
      json["atr_time_period"] == null ? undefined : json["atr_time_period"],
    multiplier: json["multiplier"] == null ? undefined : json["multiplier"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    maType: json["ma_type"] == null ? undefined : json["ma_type"],
  };
}

export function GetTimeSeriesKeltner200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesKeltner200ResponseMetaIndicator {
  return GetTimeSeriesKeltner200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesKeltner200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesKeltner200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    time_period: value["timePeriod"],
    atr_time_period: value["atrTimePeriod"],
    multiplier: value["multiplier"],
    series_type: value["seriesType"],
    ma_type: value["maType"],
  };
}
