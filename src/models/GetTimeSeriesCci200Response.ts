/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCci200ResponseMeta } from "./GetTimeSeriesCci200ResponseMeta";
import {
  GetTimeSeriesCci200ResponseMetaFromJSON,
  GetTimeSeriesCci200ResponseMetaFromJSONTyped,
  GetTimeSeriesCci200ResponseMetaToJSON,
  GetTimeSeriesCci200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesCci200ResponseMeta";
import type { GetTimeSeriesCci200ResponseValuesInner } from "./GetTimeSeriesCci200ResponseValuesInner";
import {
  GetTimeSeriesCci200ResponseValuesInnerFromJSON,
  GetTimeSeriesCci200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesCci200ResponseValuesInnerToJSON,
  GetTimeSeriesCci200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesCci200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesCci200Response
 */
export interface GetTimeSeriesCci200Response {
  /**
   *
   * @type {GetTimeSeriesCci200ResponseMeta}
   * @memberof GetTimeSeriesCci200Response
   */
  meta?: GetTimeSeriesCci200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesCci200ResponseValuesInner>}
   * @memberof GetTimeSeriesCci200Response
   */
  values?: Array<GetTimeSeriesCci200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesCci200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCci200Response interface.
 */
export function instanceOfGetTimeSeriesCci200Response(
  value: object,
): value is GetTimeSeriesCci200Response {
  return true;
}

export function GetTimeSeriesCci200ResponseFromJSON(
  json: any,
): GetTimeSeriesCci200Response {
  return GetTimeSeriesCci200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCci200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesCci200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesCci200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesCci200ResponseToJSON(
  json: any,
): GetTimeSeriesCci200Response {
  return GetTimeSeriesCci200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCci200ResponseToJSONTyped(
  value?: GetTimeSeriesCci200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesCci200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesCci200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
