/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesWclPrice200ResponseMeta } from "./GetTimeSeriesWclPrice200ResponseMeta";
import {
  GetTimeSeriesWclPrice200ResponseMetaFromJSON,
  GetTimeSeriesWclPrice200ResponseMetaFromJSONTyped,
  GetTimeSeriesWclPrice200ResponseMetaToJSON,
  GetTimeSeriesWclPrice200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesWclPrice200ResponseMeta";
import type { GetTimeSeriesWclPrice200ResponseValuesInner } from "./GetTimeSeriesWclPrice200ResponseValuesInner";
import {
  GetTimeSeriesWclPrice200ResponseValuesInnerFromJSON,
  GetTimeSeriesWclPrice200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesWclPrice200ResponseValuesInnerToJSON,
  GetTimeSeriesWclPrice200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesWclPrice200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesWclPrice200Response
 */
export interface GetTimeSeriesWclPrice200Response {
  /**
   *
   * @type {GetTimeSeriesWclPrice200ResponseMeta}
   * @memberof GetTimeSeriesWclPrice200Response
   */
  meta: GetTimeSeriesWclPrice200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesWclPrice200ResponseValuesInner>}
   * @memberof GetTimeSeriesWclPrice200Response
   */
  values: Array<GetTimeSeriesWclPrice200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesWclPrice200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWclPrice200Response interface.
 */
export function instanceOfGetTimeSeriesWclPrice200Response(
  value: object,
): value is GetTimeSeriesWclPrice200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesWclPrice200ResponseFromJSON(
  json: any,
): GetTimeSeriesWclPrice200Response {
  return GetTimeSeriesWclPrice200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWclPrice200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesWclPrice200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesWclPrice200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesWclPrice200ResponseToJSON(
  json: any,
): GetTimeSeriesWclPrice200Response {
  return GetTimeSeriesWclPrice200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesWclPrice200ResponseToJSONTyped(
  value?: GetTimeSeriesWclPrice200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesWclPrice200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesWclPrice200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
