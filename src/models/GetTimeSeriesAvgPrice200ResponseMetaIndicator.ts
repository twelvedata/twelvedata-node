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
 * @interface GetTimeSeriesAvgPrice200ResponseMetaIndicator
 */
export interface GetTimeSeriesAvgPrice200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMetaIndicator
   */
  name: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAvgPrice200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesAvgPrice200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesAvgPrice200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  return true;
}

export function GetTimeSeriesAvgPrice200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesAvgPrice200ResponseMetaIndicator {
  return GetTimeSeriesAvgPrice200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesAvgPrice200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvgPrice200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
  };
}

export function GetTimeSeriesAvgPrice200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesAvgPrice200ResponseMetaIndicator {
  return GetTimeSeriesAvgPrice200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesAvgPrice200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
