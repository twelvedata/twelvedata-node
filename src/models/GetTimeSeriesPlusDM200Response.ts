/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPlusDM200ResponseValuesInner } from "./GetTimeSeriesPlusDM200ResponseValuesInner";
import {
  GetTimeSeriesPlusDM200ResponseValuesInnerFromJSON,
  GetTimeSeriesPlusDM200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesPlusDM200ResponseValuesInnerToJSON,
  GetTimeSeriesPlusDM200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesPlusDM200ResponseValuesInner";
import type { GetTimeSeriesPlusDM200ResponseMeta } from "./GetTimeSeriesPlusDM200ResponseMeta";
import {
  GetTimeSeriesPlusDM200ResponseMetaFromJSON,
  GetTimeSeriesPlusDM200ResponseMetaFromJSONTyped,
  GetTimeSeriesPlusDM200ResponseMetaToJSON,
  GetTimeSeriesPlusDM200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesPlusDM200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesPlusDM200Response
 */
export interface GetTimeSeriesPlusDM200Response {
  /**
   *
   * @type {GetTimeSeriesPlusDM200ResponseMeta}
   * @memberof GetTimeSeriesPlusDM200Response
   */
  meta: GetTimeSeriesPlusDM200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesPlusDM200ResponseValuesInner>}
   * @memberof GetTimeSeriesPlusDM200Response
   */
  values: Array<GetTimeSeriesPlusDM200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesPlusDM200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPlusDM200Response interface.
 */
export function instanceOfGetTimeSeriesPlusDM200Response(
  value: object,
): value is GetTimeSeriesPlusDM200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesPlusDM200ResponseFromJSON(
  json: any,
): GetTimeSeriesPlusDM200Response {
  return GetTimeSeriesPlusDM200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPlusDM200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesPlusDM200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesPlusDM200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesPlusDM200ResponseToJSON(
  json: any,
): GetTimeSeriesPlusDM200Response {
  return GetTimeSeriesPlusDM200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesPlusDM200ResponseToJSONTyped(
  value?: GetTimeSeriesPlusDM200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesPlusDM200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesPlusDM200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
