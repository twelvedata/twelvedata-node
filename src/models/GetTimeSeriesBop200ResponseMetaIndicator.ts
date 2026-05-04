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
 * @interface GetTimeSeriesBop200ResponseMetaIndicator
 */
export interface GetTimeSeriesBop200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesBop200ResponseMetaIndicator
   */
  name: string;
}

/**
 * Check if a given object implements the GetTimeSeriesBop200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesBop200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesBop200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function GetTimeSeriesBop200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesBop200ResponseMetaIndicator {
  return GetTimeSeriesBop200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesBop200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function GetTimeSeriesBop200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesBop200ResponseMetaIndicator {
  return GetTimeSeriesBop200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesBop200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesBop200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
