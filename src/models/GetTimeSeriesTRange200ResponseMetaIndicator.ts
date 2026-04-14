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
 * @interface GetTimeSeriesTRange200ResponseMetaIndicator
 */
export interface GetTimeSeriesTRange200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesTRange200ResponseMetaIndicator
   */
  name?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTRange200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesTRange200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesTRange200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesTRange200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesTRange200ResponseMetaIndicator {
  return GetTimeSeriesTRange200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTRange200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
  };
}

export function GetTimeSeriesTRange200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesTRange200ResponseMetaIndicator {
  return GetTimeSeriesTRange200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesTRange200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
