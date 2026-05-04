/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMama200ResponseValuesInner } from "./GetTimeSeriesMama200ResponseValuesInner";
import {
  GetTimeSeriesMama200ResponseValuesInnerFromJSON,
  GetTimeSeriesMama200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMama200ResponseValuesInnerToJSON,
  GetTimeSeriesMama200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMama200ResponseValuesInner";
import type { GetTimeSeriesMama200ResponseMeta } from "./GetTimeSeriesMama200ResponseMeta";
import {
  GetTimeSeriesMama200ResponseMetaFromJSON,
  GetTimeSeriesMama200ResponseMetaFromJSONTyped,
  GetTimeSeriesMama200ResponseMetaToJSON,
  GetTimeSeriesMama200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMama200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMama200Response
 */
export interface GetTimeSeriesMama200Response {
  /**
   *
   * @type {GetTimeSeriesMama200ResponseMeta}
   * @memberof GetTimeSeriesMama200Response
   */
  meta: GetTimeSeriesMama200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMama200ResponseValuesInner>}
   * @memberof GetTimeSeriesMama200Response
   */
  values: Array<GetTimeSeriesMama200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMama200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMama200Response interface.
 */
export function instanceOfGetTimeSeriesMama200Response(
  value: object,
): value is GetTimeSeriesMama200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMama200ResponseFromJSON(
  json: any,
): GetTimeSeriesMama200Response {
  return GetTimeSeriesMama200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMama200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMama200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMama200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMama200ResponseToJSON(
  json: any,
): GetTimeSeriesMama200Response {
  return GetTimeSeriesMama200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMama200ResponseToJSONTyped(
  value?: GetTimeSeriesMama200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMama200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMama200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
