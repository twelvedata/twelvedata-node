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
 * @interface GetTimeSeriesMama200ResponseMetaIndicator
 */
export interface GetTimeSeriesMama200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesMama200ResponseMetaIndicator
   */
  seriesType?: string;
  /**
   * The limit for the fast moving average
   * @type {number}
   * @memberof GetTimeSeriesMama200ResponseMetaIndicator
   */
  fastLimit?: number;
  /**
   * The limit for the slow moving average
   * @type {number}
   * @memberof GetTimeSeriesMama200ResponseMetaIndicator
   */
  slowLimit?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMama200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMama200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMama200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMama200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMama200ResponseMetaIndicator {
  return GetTimeSeriesMama200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMama200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
    fastLimit: json["fast_limit"] == null ? undefined : json["fast_limit"],
    slowLimit: json["slow_limit"] == null ? undefined : json["slow_limit"],
  };
}

export function GetTimeSeriesMama200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMama200ResponseMetaIndicator {
  return GetTimeSeriesMama200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMama200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
    fast_limit: value["fastLimit"],
    slow_limit: value["slowLimit"],
  };
}
