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
 * @interface GetTimeSeriesWclPrice200ResponseMetaIndicator
 */
export interface GetTimeSeriesWclPrice200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200ResponseMetaIndicator
   */
  name: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWclPrice200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesWclPrice200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesWclPrice200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function GetTimeSeriesWclPrice200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesWclPrice200ResponseMetaIndicator {
  return GetTimeSeriesWclPrice200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesWclPrice200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWclPrice200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function GetTimeSeriesWclPrice200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesWclPrice200ResponseMetaIndicator {
  return GetTimeSeriesWclPrice200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesWclPrice200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
