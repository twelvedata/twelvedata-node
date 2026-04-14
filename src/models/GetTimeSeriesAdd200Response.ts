/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdd200ResponseMeta } from "./GetTimeSeriesAdd200ResponseMeta";
import {
  GetTimeSeriesAdd200ResponseMetaFromJSON,
  GetTimeSeriesAdd200ResponseMetaFromJSONTyped,
  GetTimeSeriesAdd200ResponseMetaToJSON,
  GetTimeSeriesAdd200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAdd200ResponseMeta";
import type { GetTimeSeriesAdd200ResponseValuesInner } from "./GetTimeSeriesAdd200ResponseValuesInner";
import {
  GetTimeSeriesAdd200ResponseValuesInnerFromJSON,
  GetTimeSeriesAdd200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAdd200ResponseValuesInnerToJSON,
  GetTimeSeriesAdd200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAdd200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesAdd200Response
 */
export interface GetTimeSeriesAdd200Response {
  /**
   *
   * @type {GetTimeSeriesAdd200ResponseMeta}
   * @memberof GetTimeSeriesAdd200Response
   */
  meta?: GetTimeSeriesAdd200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAdd200ResponseValuesInner>}
   * @memberof GetTimeSeriesAdd200Response
   */
  values?: Array<GetTimeSeriesAdd200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAdd200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdd200Response interface.
 */
export function instanceOfGetTimeSeriesAdd200Response(
  value: object,
): value is GetTimeSeriesAdd200Response {
  return true;
}

export function GetTimeSeriesAdd200ResponseFromJSON(
  json: any,
): GetTimeSeriesAdd200Response {
  return GetTimeSeriesAdd200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdd200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAdd200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAdd200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAdd200ResponseToJSON(
  json: any,
): GetTimeSeriesAdd200Response {
  return GetTimeSeriesAdd200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAdd200ResponseToJSONTyped(
  value?: GetTimeSeriesAdd200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAdd200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAdd200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
