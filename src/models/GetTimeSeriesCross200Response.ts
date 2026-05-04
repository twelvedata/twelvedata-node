/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { TimeSeriesCrossItem } from "./TimeSeriesCrossItem";
import {
  TimeSeriesCrossItemFromJSON,
  TimeSeriesCrossItemFromJSONTyped,
  TimeSeriesCrossItemToJSON,
  TimeSeriesCrossItemToJSONTyped,
} from "./TimeSeriesCrossItem";
import type { CrossMeta } from "./CrossMeta";
import {
  CrossMetaFromJSON,
  CrossMetaFromJSONTyped,
  CrossMetaToJSON,
  CrossMetaToJSONTyped,
} from "./CrossMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesCross200Response
 */
export interface GetTimeSeriesCross200Response {
  /**
   *
   * @type {CrossMeta}
   * @memberof GetTimeSeriesCross200Response
   */
  meta: CrossMeta;
  /**
   * Array of time series data points
   * @type {Array<TimeSeriesCrossItem>}
   * @memberof GetTimeSeriesCross200Response
   */
  values: Array<TimeSeriesCrossItem>;
}

/**
 * Check if a given object implements the GetTimeSeriesCross200Response interface.
 */
export function instanceOfGetTimeSeriesCross200Response(
  value: object,
): value is GetTimeSeriesCross200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  return true;
}

export function GetTimeSeriesCross200ResponseFromJSON(
  json: any,
): GetTimeSeriesCross200Response {
  return GetTimeSeriesCross200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCross200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCross200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: CrossMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(TimeSeriesCrossItemFromJSON),
  };
}

export function GetTimeSeriesCross200ResponseToJSON(
  json: any,
): GetTimeSeriesCross200Response {
  return GetTimeSeriesCross200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCross200ResponseToJSONTyped(
  value?: GetTimeSeriesCross200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: CrossMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(TimeSeriesCrossItemToJSON),
  };
}
