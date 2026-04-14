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
 * @interface GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator
 */
export interface GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesLinearRegIntercept200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator {
  return GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator {
  return GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesLinearRegIntercept200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesLinearRegIntercept200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    time_period: value["timePeriod"],
  };
}
