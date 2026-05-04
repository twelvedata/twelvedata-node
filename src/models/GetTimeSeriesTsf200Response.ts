/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTsf200ResponseMeta } from "./GetTimeSeriesTsf200ResponseMeta";
import {
  GetTimeSeriesTsf200ResponseMetaFromJSON,
  GetTimeSeriesTsf200ResponseMetaFromJSONTyped,
  GetTimeSeriesTsf200ResponseMetaToJSON,
  GetTimeSeriesTsf200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesTsf200ResponseMeta";
import type { GetTimeSeriesTsf200ResponseValuesInner } from "./GetTimeSeriesTsf200ResponseValuesInner";
import {
  GetTimeSeriesTsf200ResponseValuesInnerFromJSON,
  GetTimeSeriesTsf200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesTsf200ResponseValuesInnerToJSON,
  GetTimeSeriesTsf200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesTsf200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesTsf200Response
 */
export interface GetTimeSeriesTsf200Response {
  /**
   *
   * @type {GetTimeSeriesTsf200ResponseMeta}
   * @memberof GetTimeSeriesTsf200Response
   */
  meta: GetTimeSeriesTsf200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesTsf200ResponseValuesInner>}
   * @memberof GetTimeSeriesTsf200Response
   */
  values: Array<GetTimeSeriesTsf200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesTsf200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTsf200Response interface.
 */
export function instanceOfGetTimeSeriesTsf200Response(
  value: object,
): value is GetTimeSeriesTsf200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesTsf200ResponseFromJSON(
  json: any,
): GetTimeSeriesTsf200Response {
  return GetTimeSeriesTsf200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTsf200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesTsf200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesTsf200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesTsf200ResponseToJSON(
  json: any,
): GetTimeSeriesTsf200Response {
  return GetTimeSeriesTsf200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesTsf200ResponseToJSONTyped(
  value?: GetTimeSeriesTsf200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesTsf200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesTsf200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
