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
 * @interface GetTimeSeriesTypPrice200ResponseMetaIndicator
 */
export interface GetTimeSeriesTypPrice200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200ResponseMetaIndicator
   */
  name?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTypPrice200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesTypPrice200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesTypPrice200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesTypPrice200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesTypPrice200ResponseMetaIndicator {
  return GetTimeSeriesTypPrice200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesTypPrice200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTypPrice200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
  };
}

export function GetTimeSeriesTypPrice200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesTypPrice200ResponseMetaIndicator {
  return GetTimeSeriesTypPrice200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesTypPrice200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
