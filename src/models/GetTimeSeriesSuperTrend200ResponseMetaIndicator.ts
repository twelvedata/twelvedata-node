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
 * @interface GetTimeSeriesSuperTrend200ResponseMetaIndicator
 */
export interface GetTimeSeriesSuperTrend200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSuperTrend200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesSuperTrend200ResponseMetaIndicator
   */
  period?: number;
  /**
   * The factor used to adjust the indicator's sensitivity
   * @type {number}
   * @memberof GetTimeSeriesSuperTrend200ResponseMetaIndicator
   */
  multiplier?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesSuperTrend200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSuperTrend200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSuperTrend200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesSuperTrend200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSuperTrend200ResponseMetaIndicator {
  return GetTimeSeriesSuperTrend200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrend200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSuperTrend200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    period: json["period"] == null ? undefined : json["period"],
    multiplier: json["multiplier"] == null ? undefined : json["multiplier"],
  };
}

export function GetTimeSeriesSuperTrend200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSuperTrend200ResponseMetaIndicator {
  return GetTimeSeriesSuperTrend200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesSuperTrend200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSuperTrend200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    period: value["period"],
    multiplier: value["multiplier"],
  };
}
