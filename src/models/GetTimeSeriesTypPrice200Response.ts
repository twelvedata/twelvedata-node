/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTypPrice200ResponseValuesInner } from "./GetTimeSeriesTypPrice200ResponseValuesInner";
import {
  GetTimeSeriesTypPrice200ResponseValuesInnerFromJSON,
  GetTimeSeriesTypPrice200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesTypPrice200ResponseValuesInnerToJSON,
  GetTimeSeriesTypPrice200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesTypPrice200ResponseValuesInner";
import type { GetTimeSeriesTypPrice200ResponseMeta } from "./GetTimeSeriesTypPrice200ResponseMeta";
import {
  GetTimeSeriesTypPrice200ResponseMetaFromJSON,
  GetTimeSeriesTypPrice200ResponseMetaFromJSONTyped,
  GetTimeSeriesTypPrice200ResponseMetaToJSON,
  GetTimeSeriesTypPrice200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesTypPrice200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesTypPrice200Response
 */
export interface GetTimeSeriesTypPrice200Response {
  /**
   *
   * @type {GetTimeSeriesTypPrice200ResponseMeta}
   * @memberof GetTimeSeriesTypPrice200Response
   */
  meta: GetTimeSeriesTypPrice200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesTypPrice200ResponseValuesInner>}
   * @memberof GetTimeSeriesTypPrice200Response
   */
  values: Array<GetTimeSeriesTypPrice200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesTypPrice200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTypPrice200Response interface.
 */
export function instanceOfGetTimeSeriesTypPrice200Response(
  value: object,
): value is GetTimeSeriesTypPrice200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTypPrice200ResponseFromJSON(
  json: any,
): GetTimeSeriesTypPrice200Response {
  return GetTimeSeriesTypPrice200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTypPrice200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesTypPrice200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesTypPrice200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesTypPrice200ResponseToJSON(
  json: any,
): GetTimeSeriesTypPrice200Response {
  return GetTimeSeriesTypPrice200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesTypPrice200ResponseToJSONTyped(
  value?: GetTimeSeriesTypPrice200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesTypPrice200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesTypPrice200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
