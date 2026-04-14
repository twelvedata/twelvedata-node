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
 * @interface GetTimeSeriesSar200ResponseMetaIndicator
 */
export interface GetTimeSeriesSar200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesSar200ResponseMetaIndicator
   */
  name?: string;
  /**
   * The acceleration factor used in the indicator calculation
   * @type {number}
   * @memberof GetTimeSeriesSar200ResponseMetaIndicator
   */
  acceleration?: number;
  /**
   * The maximum value considered for the indicator calculation
   * @type {number}
   * @memberof GetTimeSeriesSar200ResponseMetaIndicator
   */
  maximum?: number;
}

/**
 * Check if a given object implements the GetTimeSeriesSar200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesSar200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesSar200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesSar200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesSar200ResponseMetaIndicator {
  return GetTimeSeriesSar200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSar200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    acceleration:
      json["acceleration"] == null ? undefined : json["acceleration"],
    maximum: json["maximum"] == null ? undefined : json["maximum"],
  };
}

export function GetTimeSeriesSar200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesSar200ResponseMetaIndicator {
  return GetTimeSeriesSar200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesSar200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    acceleration: value["acceleration"],
    maximum: value["maximum"],
  };
}
