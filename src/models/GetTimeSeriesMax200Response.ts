/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMax200ResponseMeta } from "./GetTimeSeriesMax200ResponseMeta";
import {
  GetTimeSeriesMax200ResponseMetaFromJSON,
  GetTimeSeriesMax200ResponseMetaFromJSONTyped,
  GetTimeSeriesMax200ResponseMetaToJSON,
  GetTimeSeriesMax200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMax200ResponseMeta";
import type { GetTimeSeriesMax200ResponseValuesInner } from "./GetTimeSeriesMax200ResponseValuesInner";
import {
  GetTimeSeriesMax200ResponseValuesInnerFromJSON,
  GetTimeSeriesMax200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMax200ResponseValuesInnerToJSON,
  GetTimeSeriesMax200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMax200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMax200Response
 */
export interface GetTimeSeriesMax200Response {
  /**
   *
   * @type {GetTimeSeriesMax200ResponseMeta}
   * @memberof GetTimeSeriesMax200Response
   */
  meta?: GetTimeSeriesMax200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMax200ResponseValuesInner>}
   * @memberof GetTimeSeriesMax200Response
   */
  values?: Array<GetTimeSeriesMax200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMax200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMax200Response interface.
 */
export function instanceOfGetTimeSeriesMax200Response(
  value: object,
): value is GetTimeSeriesMax200Response {
  return true;
}

export function GetTimeSeriesMax200ResponseFromJSON(
  json: any,
): GetTimeSeriesMax200Response {
  return GetTimeSeriesMax200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMax200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMax200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMax200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMax200ResponseToJSON(
  json: any,
): GetTimeSeriesMax200Response {
  return GetTimeSeriesMax200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMax200ResponseToJSONTyped(
  value?: GetTimeSeriesMax200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMax200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMax200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
