/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesDema200ResponseMeta } from "./GetTimeSeriesDema200ResponseMeta";
import {
  GetTimeSeriesDema200ResponseMetaFromJSON,
  GetTimeSeriesDema200ResponseMetaFromJSONTyped,
  GetTimeSeriesDema200ResponseMetaToJSON,
  GetTimeSeriesDema200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesDema200ResponseMeta";
import type { GetTimeSeriesDema200ResponseValuesInner } from "./GetTimeSeriesDema200ResponseValuesInner";
import {
  GetTimeSeriesDema200ResponseValuesInnerFromJSON,
  GetTimeSeriesDema200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesDema200ResponseValuesInnerToJSON,
  GetTimeSeriesDema200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesDema200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesDema200Response
 */
export interface GetTimeSeriesDema200Response {
  /**
   *
   * @type {GetTimeSeriesDema200ResponseMeta}
   * @memberof GetTimeSeriesDema200Response
   */
  meta?: GetTimeSeriesDema200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesDema200ResponseValuesInner>}
   * @memberof GetTimeSeriesDema200Response
   */
  values?: Array<GetTimeSeriesDema200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesDema200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesDema200Response interface.
 */
export function instanceOfGetTimeSeriesDema200Response(
  value: object,
): value is GetTimeSeriesDema200Response {
  return true;
}

export function GetTimeSeriesDema200ResponseFromJSON(
  json: any,
): GetTimeSeriesDema200Response {
  return GetTimeSeriesDema200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesDema200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesDema200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesDema200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesDema200ResponseToJSON(
  json: any,
): GetTimeSeriesDema200Response {
  return GetTimeSeriesDema200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesDema200ResponseToJSONTyped(
  value?: GetTimeSeriesDema200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesDema200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesDema200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
