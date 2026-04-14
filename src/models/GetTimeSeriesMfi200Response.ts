/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMfi200ResponseValuesInner } from "./GetTimeSeriesMfi200ResponseValuesInner";
import {
  GetTimeSeriesMfi200ResponseValuesInnerFromJSON,
  GetTimeSeriesMfi200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMfi200ResponseValuesInnerToJSON,
  GetTimeSeriesMfi200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMfi200ResponseValuesInner";
import type { GetTimeSeriesMfi200ResponseMeta } from "./GetTimeSeriesMfi200ResponseMeta";
import {
  GetTimeSeriesMfi200ResponseMetaFromJSON,
  GetTimeSeriesMfi200ResponseMetaFromJSONTyped,
  GetTimeSeriesMfi200ResponseMetaToJSON,
  GetTimeSeriesMfi200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMfi200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMfi200Response
 */
export interface GetTimeSeriesMfi200Response {
  /**
   *
   * @type {GetTimeSeriesMfi200ResponseMeta}
   * @memberof GetTimeSeriesMfi200Response
   */
  meta?: GetTimeSeriesMfi200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMfi200ResponseValuesInner>}
   * @memberof GetTimeSeriesMfi200Response
   */
  values?: Array<GetTimeSeriesMfi200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMfi200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMfi200Response interface.
 */
export function instanceOfGetTimeSeriesMfi200Response(
  value: object,
): value is GetTimeSeriesMfi200Response {
  return true;
}

export function GetTimeSeriesMfi200ResponseFromJSON(
  json: any,
): GetTimeSeriesMfi200Response {
  return GetTimeSeriesMfi200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMfi200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMfi200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMfi200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMfi200ResponseToJSON(
  json: any,
): GetTimeSeriesMfi200Response {
  return GetTimeSeriesMfi200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMfi200ResponseToJSONTyped(
  value?: GetTimeSeriesMfi200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMfi200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMfi200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
