/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesObv200ResponseMeta } from "./GetTimeSeriesObv200ResponseMeta";
import {
  GetTimeSeriesObv200ResponseMetaFromJSON,
  GetTimeSeriesObv200ResponseMetaFromJSONTyped,
  GetTimeSeriesObv200ResponseMetaToJSON,
  GetTimeSeriesObv200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesObv200ResponseMeta";
import type { GetTimeSeriesObv200ResponseValuesInner } from "./GetTimeSeriesObv200ResponseValuesInner";
import {
  GetTimeSeriesObv200ResponseValuesInnerFromJSON,
  GetTimeSeriesObv200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesObv200ResponseValuesInnerToJSON,
  GetTimeSeriesObv200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesObv200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesObv200Response
 */
export interface GetTimeSeriesObv200Response {
  /**
   *
   * @type {GetTimeSeriesObv200ResponseMeta}
   * @memberof GetTimeSeriesObv200Response
   */
  meta?: GetTimeSeriesObv200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesObv200ResponseValuesInner>}
   * @memberof GetTimeSeriesObv200Response
   */
  values?: Array<GetTimeSeriesObv200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesObv200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesObv200Response interface.
 */
export function instanceOfGetTimeSeriesObv200Response(
  value: object,
): value is GetTimeSeriesObv200Response {
  return true;
}

export function GetTimeSeriesObv200ResponseFromJSON(
  json: any,
): GetTimeSeriesObv200Response {
  return GetTimeSeriesObv200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesObv200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesObv200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesObv200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesObv200ResponseToJSON(
  json: any,
): GetTimeSeriesObv200Response {
  return GetTimeSeriesObv200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesObv200ResponseToJSONTyped(
  value?: GetTimeSeriesObv200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesObv200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesObv200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
