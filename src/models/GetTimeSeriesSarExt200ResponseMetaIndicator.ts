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
 * @interface GetTimeSeriesSarExt200ResponseMetaIndicator
 */
export interface GetTimeSeriesSarExt200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  name: string;
  /**
   * The initial value for the indicator calculation
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  startValue: number;
  /**
   * The adjustment applied when the indicator's direction changes
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  offsetOnReverse: number;
  /**
   * The maximum acceleration value for long positions
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  accelerationLimitLong: number;
  /**
   * The acceleration value for long positions
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  accelerationLong: number;
  /**
   * The highest allowed acceleration for long positions
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  accelerationMaxLong: number;
  /**
   * The maximum acceleration value for short positions
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  accelerationLimitShort: number;
  /**
   * The acceleration value for short positions
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  accelerationShort: number;
  /**
   * The highest allowed acceleration for short positions
   * @type {number}
   * @memberof GetTimeSeriesSarExt200ResponseMetaIndicator
   */
  accelerationMaxShort: number;
}

/**
 * Check if a given object implements the GetTimeSeriesSarExt200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSarExt200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSarExt200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("startValue" in value) || value["startValue"] === undefined)
    return false;
  if (!("offsetOnReverse" in value) || value["offsetOnReverse"] === undefined)
    return false;
  if (
    !("accelerationLimitLong" in value) ||
    value["accelerationLimitLong"] === undefined
  )
    return false;
  if (!("accelerationLong" in value) || value["accelerationLong"] === undefined)
    return false;
  if (
    !("accelerationMaxLong" in value) ||
    value["accelerationMaxLong"] === undefined
  )
    return false;
  if (
    !("accelerationLimitShort" in value) ||
    value["accelerationLimitShort"] === undefined
  )
    return false;
  if (
    !("accelerationShort" in value) ||
    value["accelerationShort"] === undefined
  )
    return false;
  if (
    !("accelerationMaxShort" in value) ||
    value["accelerationMaxShort"] === undefined
  )
    return false;
  return true;
}

export function GetTimeSeriesSarExt200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSarExt200ResponseMetaIndicator {
  return GetTimeSeriesSarExt200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSarExt200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    startValue: json["start_value"],
    offsetOnReverse: json["offset_on_reverse"],
    accelerationLimitLong: json["acceleration_limit_long"],
    accelerationLong: json["acceleration_long"],
    accelerationMaxLong: json["acceleration_max_long"],
    accelerationLimitShort: json["acceleration_limit_short"],
    accelerationShort: json["acceleration_short"],
    accelerationMaxShort: json["acceleration_max_short"],
  };
}

export function GetTimeSeriesSarExt200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSarExt200ResponseMetaIndicator {
  return GetTimeSeriesSarExt200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesSarExt200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSarExt200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    start_value: value["startValue"],
    offset_on_reverse: value["offsetOnReverse"],
    acceleration_limit_long: value["accelerationLimitLong"],
    acceleration_long: value["accelerationLong"],
    acceleration_max_long: value["accelerationMaxLong"],
    acceleration_limit_short: value["accelerationLimitShort"],
    acceleration_short: value["accelerationShort"],
    acceleration_max_short: value["accelerationMaxShort"],
  };
}
