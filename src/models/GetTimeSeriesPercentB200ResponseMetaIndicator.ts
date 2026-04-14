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
 * @interface GetTimeSeriesPercentB200ResponseMetaIndicator
 */
export interface GetTimeSeriesPercentB200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesPercentB200ResponseMetaIndicator
   */
  timePeriod?: number;
  /**
   * The standard deviation applied in the calculation
   * @type {number}
   * @memberof GetTimeSeriesPercentB200ResponseMetaIndicator
   */
  sd?: number;
  /**
   * The type of moving average used
   * @type {string}
   * @memberof GetTimeSeriesPercentB200ResponseMetaIndicator
   */
  maType?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPercentB200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesPercentB200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesPercentB200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesPercentB200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseMetaIndicator {
  return GetTimeSeriesPercentB200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesPercentB200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPercentB200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
    sd: json["sd"] == null ? undefined : json["sd"],
    maType: json["ma_type"] == null ? undefined : json["ma_type"],
  };
}

export function GetTimeSeriesPercentB200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesPercentB200ResponseMetaIndicator {
  return GetTimeSeriesPercentB200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesPercentB200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesPercentB200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
    sd: value["sd"],
    ma_type: value["maType"],
  };
}
