/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesExp200ResponseMeta } from "./GetTimeSeriesExp200ResponseMeta";
import {
  GetTimeSeriesExp200ResponseMetaFromJSON,
  GetTimeSeriesExp200ResponseMetaFromJSONTyped,
  GetTimeSeriesExp200ResponseMetaToJSON,
  GetTimeSeriesExp200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesExp200ResponseMeta";
import type { GetTimeSeriesExp200ResponseValuesInner } from "./GetTimeSeriesExp200ResponseValuesInner";
import {
  GetTimeSeriesExp200ResponseValuesInnerFromJSON,
  GetTimeSeriesExp200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesExp200ResponseValuesInnerToJSON,
  GetTimeSeriesExp200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesExp200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesExp200Response
 */
export interface GetTimeSeriesExp200Response {
  /**
   *
   * @type {GetTimeSeriesExp200ResponseMeta}
   * @memberof GetTimeSeriesExp200Response
   */
  meta?: GetTimeSeriesExp200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesExp200ResponseValuesInner>}
   * @memberof GetTimeSeriesExp200Response
   */
  values?: Array<GetTimeSeriesExp200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesExp200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesExp200Response interface.
 */
export function instanceOfGetTimeSeriesExp200Response(
  value: object,
): value is GetTimeSeriesExp200Response {
  return true;
}

export function GetTimeSeriesExp200ResponseFromJSON(
  json: any,
): GetTimeSeriesExp200Response {
  return GetTimeSeriesExp200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesExp200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesExp200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesExp200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesExp200ResponseToJSON(
  json: any,
): GetTimeSeriesExp200Response {
  return GetTimeSeriesExp200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesExp200ResponseToJSONTyped(
  value?: GetTimeSeriesExp200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesExp200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesExp200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
