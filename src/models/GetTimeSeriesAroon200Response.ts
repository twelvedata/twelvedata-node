/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAroon200ResponseMeta } from "./GetTimeSeriesAroon200ResponseMeta";
import {
  GetTimeSeriesAroon200ResponseMetaFromJSON,
  GetTimeSeriesAroon200ResponseMetaFromJSONTyped,
  GetTimeSeriesAroon200ResponseMetaToJSON,
  GetTimeSeriesAroon200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAroon200ResponseMeta";
import type { GetTimeSeriesAroon200ResponseValuesInner } from "./GetTimeSeriesAroon200ResponseValuesInner";
import {
  GetTimeSeriesAroon200ResponseValuesInnerFromJSON,
  GetTimeSeriesAroon200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAroon200ResponseValuesInnerToJSON,
  GetTimeSeriesAroon200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAroon200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesAroon200Response
 */
export interface GetTimeSeriesAroon200Response {
  /**
   *
   * @type {GetTimeSeriesAroon200ResponseMeta}
   * @memberof GetTimeSeriesAroon200Response
   */
  meta?: GetTimeSeriesAroon200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAroon200ResponseValuesInner>}
   * @memberof GetTimeSeriesAroon200Response
   */
  values?: Array<GetTimeSeriesAroon200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAroon200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAroon200Response interface.
 */
export function instanceOfGetTimeSeriesAroon200Response(
  value: object,
): value is GetTimeSeriesAroon200Response {
  return true;
}

export function GetTimeSeriesAroon200ResponseFromJSON(
  json: any,
): GetTimeSeriesAroon200Response {
  return GetTimeSeriesAroon200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroon200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAroon200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAroon200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAroon200ResponseToJSON(
  json: any,
): GetTimeSeriesAroon200Response {
  return GetTimeSeriesAroon200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAroon200ResponseToJSONTyped(
  value?: GetTimeSeriesAroon200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAroon200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAroon200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
