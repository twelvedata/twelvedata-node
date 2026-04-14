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
 * @interface GetTimeSeriesMidPrice200ResponseMetaIndicator
 */
export interface GetTimeSeriesMidPrice200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesMidPrice200ResponseMetaIndicator
   */
  timePeriod?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPrice200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMidPrice200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMidPrice200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMidPrice200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseMetaIndicator {
  return GetTimeSeriesMidPrice200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMidPrice200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPrice200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    timePeriod: json["time_period"] == null ? undefined : json["time_period"],
  };
}

export function GetTimeSeriesMidPrice200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMidPrice200ResponseMetaIndicator {
  return GetTimeSeriesMidPrice200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMidPrice200ResponseMetaIndicator | null,
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
