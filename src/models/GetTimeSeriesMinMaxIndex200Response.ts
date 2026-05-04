/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinMaxIndex200ResponseMeta } from "./GetTimeSeriesMinMaxIndex200ResponseMeta";
import {
  GetTimeSeriesMinMaxIndex200ResponseMetaFromJSON,
  GetTimeSeriesMinMaxIndex200ResponseMetaFromJSONTyped,
  GetTimeSeriesMinMaxIndex200ResponseMetaToJSON,
  GetTimeSeriesMinMaxIndex200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMinMaxIndex200ResponseMeta";
import type { GetTimeSeriesMinMaxIndex200ResponseValuesInner } from "./GetTimeSeriesMinMaxIndex200ResponseValuesInner";
import {
  GetTimeSeriesMinMaxIndex200ResponseValuesInnerFromJSON,
  GetTimeSeriesMinMaxIndex200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMinMaxIndex200ResponseValuesInnerToJSON,
  GetTimeSeriesMinMaxIndex200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMinMaxIndex200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMinMaxIndex200Response
 */
export interface GetTimeSeriesMinMaxIndex200Response {
  /**
   *
   * @type {GetTimeSeriesMinMaxIndex200ResponseMeta}
   * @memberof GetTimeSeriesMinMaxIndex200Response
   */
  meta: GetTimeSeriesMinMaxIndex200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMinMaxIndex200ResponseValuesInner>}
   * @memberof GetTimeSeriesMinMaxIndex200Response
   */
  values: Array<GetTimeSeriesMinMaxIndex200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMinMaxIndex200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMaxIndex200Response interface.
 */
export function instanceOfGetTimeSeriesMinMaxIndex200Response(
  value: object,
): value is GetTimeSeriesMinMaxIndex200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMinMaxIndex200ResponseFromJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200Response {
  return GetTimeSeriesMinMaxIndex200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMaxIndex200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMaxIndex200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMinMaxIndex200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMinMaxIndex200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMinMaxIndex200ResponseToJSON(
  json: any,
): GetTimeSeriesMinMaxIndex200Response {
  return GetTimeSeriesMinMaxIndex200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMinMaxIndex200ResponseToJSONTyped(
  value?: GetTimeSeriesMinMaxIndex200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMinMaxIndex200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMinMaxIndex200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
