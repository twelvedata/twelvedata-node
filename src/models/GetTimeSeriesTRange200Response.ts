/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTRange200ResponseMeta } from "./GetTimeSeriesTRange200ResponseMeta";
import {
  GetTimeSeriesTRange200ResponseMetaFromJSON,
  GetTimeSeriesTRange200ResponseMetaFromJSONTyped,
  GetTimeSeriesTRange200ResponseMetaToJSON,
  GetTimeSeriesTRange200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesTRange200ResponseMeta";
import type { GetTimeSeriesTRange200ResponseValuesInner } from "./GetTimeSeriesTRange200ResponseValuesInner";
import {
  GetTimeSeriesTRange200ResponseValuesInnerFromJSON,
  GetTimeSeriesTRange200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesTRange200ResponseValuesInnerToJSON,
  GetTimeSeriesTRange200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesTRange200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesTRange200Response
 */
export interface GetTimeSeriesTRange200Response {
  /**
   *
   * @type {GetTimeSeriesTRange200ResponseMeta}
   * @memberof GetTimeSeriesTRange200Response
   */
  meta: GetTimeSeriesTRange200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesTRange200ResponseValuesInner>}
   * @memberof GetTimeSeriesTRange200Response
   */
  values: Array<GetTimeSeriesTRange200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesTRange200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTRange200Response interface.
 */
export function instanceOfGetTimeSeriesTRange200Response(
  value: object,
): value is GetTimeSeriesTRange200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTRange200ResponseFromJSON(
  json: any,
): GetTimeSeriesTRange200Response {
  return GetTimeSeriesTRange200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTRange200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesTRange200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesTRange200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesTRange200ResponseToJSON(
  json: any,
): GetTimeSeriesTRange200Response {
  return GetTimeSeriesTRange200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesTRange200ResponseToJSONTyped(
  value?: GetTimeSeriesTRange200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesTRange200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesTRange200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
