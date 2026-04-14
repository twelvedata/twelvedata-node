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
 * @interface GetTimeSeriesHlc3200ResponseMetaIndicator
 */
export interface GetTimeSeriesHlc3200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesHlc3200ResponseMetaIndicator
   */
  name?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHlc3200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesHlc3200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesHlc3200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesHlc3200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesHlc3200ResponseMetaIndicator {
  return GetTimeSeriesHlc3200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHlc3200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
  };
}

export function GetTimeSeriesHlc3200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesHlc3200ResponseMetaIndicator {
  return GetTimeSeriesHlc3200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesHlc3200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
