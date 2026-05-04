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
 * @interface GetTimeSeriesCeil200ResponseMetaIndicator
 */
export interface GetTimeSeriesCeil200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof GetTimeSeriesCeil200ResponseMetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCeil200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesCeil200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesCeil200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesCeil200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesCeil200ResponseMetaIndicator {
  return GetTimeSeriesCeil200ResponseMetaIndicatorFromJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCeil200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function GetTimeSeriesCeil200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesCeil200ResponseMetaIndicator {
  return GetTimeSeriesCeil200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesCeil200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
  };
}
