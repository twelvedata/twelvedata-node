/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesPpo200ResponseValuesInner } from "./GetTimeSeriesPpo200ResponseValuesInner";
import {
  GetTimeSeriesPpo200ResponseValuesInnerFromJSON,
  GetTimeSeriesPpo200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesPpo200ResponseValuesInnerToJSON,
  GetTimeSeriesPpo200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesPpo200ResponseValuesInner";
import type { GetTimeSeriesPpo200ResponseMeta } from "./GetTimeSeriesPpo200ResponseMeta";
import {
  GetTimeSeriesPpo200ResponseMetaFromJSON,
  GetTimeSeriesPpo200ResponseMetaFromJSONTyped,
  GetTimeSeriesPpo200ResponseMetaToJSON,
  GetTimeSeriesPpo200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesPpo200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesPpo200Response
 */
export interface GetTimeSeriesPpo200Response {
  /**
   *
   * @type {GetTimeSeriesPpo200ResponseMeta}
   * @memberof GetTimeSeriesPpo200Response
   */
  meta?: GetTimeSeriesPpo200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesPpo200ResponseValuesInner>}
   * @memberof GetTimeSeriesPpo200Response
   */
  values?: Array<GetTimeSeriesPpo200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesPpo200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesPpo200Response interface.
 */
export function instanceOfGetTimeSeriesPpo200Response(
  value: object,
): value is GetTimeSeriesPpo200Response {
  return true;
}

export function GetTimeSeriesPpo200ResponseFromJSON(
  json: any,
): GetTimeSeriesPpo200Response {
  return GetTimeSeriesPpo200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesPpo200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesPpo200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesPpo200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesPpo200ResponseToJSON(
  json: any,
): GetTimeSeriesPpo200Response {
  return GetTimeSeriesPpo200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesPpo200ResponseToJSONTyped(
  value?: GetTimeSeriesPpo200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesPpo200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesPpo200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
