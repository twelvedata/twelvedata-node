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
 * @interface GetTimeSeriesUltOsc200ResponseMetaIndicator
 */
export interface GetTimeSeriesUltOsc200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesUltOsc200ResponseMetaIndicator
   */
  name: string;
  /**
   * The first time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesUltOsc200ResponseMetaIndicator
   */
  timePeriod1: number;
  /**
   * The second time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesUltOsc200ResponseMetaIndicator
   */
  timePeriod2: number;
  /**
   * The third time period used for calculation in the indicator
   * @type {number}
   * @memberof GetTimeSeriesUltOsc200ResponseMetaIndicator
   */
  timePeriod3: number;
}

/**
 * Check if a given object implements the GetTimeSeriesUltOsc200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesUltOsc200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesUltOsc200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("timePeriod1" in value) || value["timePeriod1"] === undefined)
    return false;
  if (!("timePeriod2" in value) || value["timePeriod2"] === undefined)
    return false;
  if (!("timePeriod3" in value) || value["timePeriod3"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesUltOsc200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesUltOsc200ResponseMetaIndicator {
  return GetTimeSeriesUltOsc200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesUltOsc200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    timePeriod1: json["time_period_1"],
    timePeriod2: json["time_period_2"],
    timePeriod3: json["time_period_3"],
  };
}

export function GetTimeSeriesUltOsc200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesUltOsc200ResponseMetaIndicator {
  return GetTimeSeriesUltOsc200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesUltOsc200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesUltOsc200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    time_period_1: value["timePeriod1"],
    time_period_2: value["timePeriod2"],
    time_period_3: value["timePeriod3"],
  };
}
