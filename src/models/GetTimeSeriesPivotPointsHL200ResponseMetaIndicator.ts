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
 * @interface GetTimeSeriesPivotPointsHL200ResponseMetaIndicator
 */
export interface GetTimeSeriesPivotPointsHL200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseMetaIndicator
   */
  name: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesPivotPointsHL200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesPivotPointsHL200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesPivotPointsHL200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesPivotPointsHL200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesPivotPointsHL200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesPivotPointsHL200ResponseMetaIndicator {
  return GetTimeSeriesPivotPointsHL200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesPivotPointsHL200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPivotPointsHL200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesPivotPointsHL200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesPivotPointsHL200ResponseMetaIndicator {
  return GetTimeSeriesPivotPointsHL200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesPivotPointsHL200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesPivotPointsHL200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    time_period: value["timePeriod"],
  };
}
