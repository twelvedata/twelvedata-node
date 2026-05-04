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
 * @interface GetTimeSeriesAd200ResponseMetaIndicator
 */
export interface GetTimeSeriesAd200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAd200ResponseMetaIndicator
   */
  name: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAd200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAd200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAd200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAd200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAd200ResponseMetaIndicator {
  return GetTimeSeriesAd200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAd200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function GetTimeSeriesAd200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAd200ResponseMetaIndicator {
  return GetTimeSeriesAd200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAd200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
