/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesWma200ResponseValuesInner } from "./GetTimeSeriesWma200ResponseValuesInner";
import {
  GetTimeSeriesWma200ResponseValuesInnerFromJSON,
  GetTimeSeriesWma200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesWma200ResponseValuesInnerToJSON,
  GetTimeSeriesWma200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesWma200ResponseValuesInner";
import type { GetTimeSeriesWma200ResponseMeta } from "./GetTimeSeriesWma200ResponseMeta";
import {
  GetTimeSeriesWma200ResponseMetaFromJSON,
  GetTimeSeriesWma200ResponseMetaFromJSONTyped,
  GetTimeSeriesWma200ResponseMetaToJSON,
  GetTimeSeriesWma200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesWma200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesWma200Response
 */
export interface GetTimeSeriesWma200Response {
  /**
   *
   * @type {GetTimeSeriesWma200ResponseMeta}
   * @memberof GetTimeSeriesWma200Response
   */
  meta?: GetTimeSeriesWma200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesWma200ResponseValuesInner>}
   * @memberof GetTimeSeriesWma200Response
   */
  values?: Array<GetTimeSeriesWma200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesWma200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesWma200Response interface.
 */
export function instanceOfGetTimeSeriesWma200Response(
  value: object,
): value is GetTimeSeriesWma200Response {
  return true;
}

export function GetTimeSeriesWma200ResponseFromJSON(
  json: any,
): GetTimeSeriesWma200Response {
  return GetTimeSeriesWma200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesWma200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesWma200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesWma200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesWma200ResponseToJSON(
  json: any,
): GetTimeSeriesWma200Response {
  return GetTimeSeriesWma200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesWma200ResponseToJSONTyped(
  value?: GetTimeSeriesWma200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesWma200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesWma200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
