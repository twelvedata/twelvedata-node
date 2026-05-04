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
 * @interface GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator
 */
export interface GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator
   */
  name: string;
  /**
   * Number of periods to average over
   * @type {number}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator
   */
  timePeriod: number;
}

/**
 * Check if a given object implements the GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod" in value) || value["timePeriod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator {
  return GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod: json["time_period"],
  };
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator {
  return GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator | null,
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
