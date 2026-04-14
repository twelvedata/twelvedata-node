/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesWillR200ResponseValuesInner } from "./GetTimeSeriesWillR200ResponseValuesInner";
import {
  GetTimeSeriesWillR200ResponseValuesInnerFromJSON,
  GetTimeSeriesWillR200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesWillR200ResponseValuesInnerToJSON,
  GetTimeSeriesWillR200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesWillR200ResponseValuesInner";
import type { GetTimeSeriesWillR200ResponseMeta } from "./GetTimeSeriesWillR200ResponseMeta";
import {
  GetTimeSeriesWillR200ResponseMetaFromJSON,
  GetTimeSeriesWillR200ResponseMetaFromJSONTyped,
  GetTimeSeriesWillR200ResponseMetaToJSON,
  GetTimeSeriesWillR200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesWillR200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesWillR200Response
 */
export interface GetTimeSeriesWillR200Response {
  /**
   *
   * @type {GetTimeSeriesWillR200ResponseMeta}
   * @memberof GetTimeSeriesWillR200Response
   */
  meta?: GetTimeSeriesWillR200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesWillR200ResponseValuesInner>}
   * @memberof GetTimeSeriesWillR200Response
   */
  values?: Array<GetTimeSeriesWillR200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesWillR200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWillR200Response interface.
 */
export function instanceOfGetTimeSeriesWillR200Response(
  value: object,
): value is GetTimeSeriesWillR200Response {
  return true;
}

export function GetTimeSeriesWillR200ResponseFromJSON(
  json: any,
): GetTimeSeriesWillR200Response {
  return GetTimeSeriesWillR200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWillR200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesWillR200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesWillR200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesWillR200ResponseToJSON(
  json: any,
): GetTimeSeriesWillR200Response {
  return GetTimeSeriesWillR200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesWillR200ResponseToJSONTyped(
  value?: GetTimeSeriesWillR200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesWillR200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesWillR200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
