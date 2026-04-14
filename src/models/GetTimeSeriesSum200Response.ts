/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSum200ResponseValuesInner } from "./GetTimeSeriesSum200ResponseValuesInner";
import {
  GetTimeSeriesSum200ResponseValuesInnerFromJSON,
  GetTimeSeriesSum200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSum200ResponseValuesInnerToJSON,
  GetTimeSeriesSum200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSum200ResponseValuesInner";
import type { GetTimeSeriesSum200ResponseMeta } from "./GetTimeSeriesSum200ResponseMeta";
import {
  GetTimeSeriesSum200ResponseMetaFromJSON,
  GetTimeSeriesSum200ResponseMetaFromJSONTyped,
  GetTimeSeriesSum200ResponseMetaToJSON,
  GetTimeSeriesSum200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSum200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesSum200Response
 */
export interface GetTimeSeriesSum200Response {
  /**
   *
   * @type {GetTimeSeriesSum200ResponseMeta}
   * @memberof GetTimeSeriesSum200Response
   */
  meta?: GetTimeSeriesSum200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSum200ResponseValuesInner>}
   * @memberof GetTimeSeriesSum200Response
   */
  values?: Array<GetTimeSeriesSum200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSum200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSum200Response interface.
 */
export function instanceOfGetTimeSeriesSum200Response(
  value: object,
): value is GetTimeSeriesSum200Response {
  return true;
}

export function GetTimeSeriesSum200ResponseFromJSON(
  json: any,
): GetTimeSeriesSum200Response {
  return GetTimeSeriesSum200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSum200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesSum200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesSum200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesSum200ResponseToJSON(
  json: any,
): GetTimeSeriesSum200Response {
  return GetTimeSeriesSum200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSum200ResponseToJSONTyped(
  value?: GetTimeSeriesSum200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSum200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesSum200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
